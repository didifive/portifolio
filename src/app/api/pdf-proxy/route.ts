import { NextResponse } from "next/server";

const ALLOWED_HOSTS = new Set(["github.com", "raw.githubusercontent.com"].map((host) => host.toLowerCase()));
const CACHE_TTL_MS = 1000 * 60 * 60 * 24;

type CachedPdf = {
  bytes: Uint8Array;
  expiresAt: number;
};

const pdfCache = new Map<string, CachedPdf>();

function cleanupExpiredEntries(now = Date.now()) {
  for (const [key, entry] of pdfCache.entries()) {
    if (entry.expiresAt <= now) {
      pdfCache.delete(key);
    }
  }
}

function isAllowedPdfUrl(url: URL) {
  const hostname = url.hostname.toLowerCase();
  return ALLOWED_HOSTS.has(hostname);
}

export async function GET(req: Request) {
  try {
    const requestedUrl = new URL(req.url).searchParams.get("url");
    if (!requestedUrl) {
      return NextResponse.json({ error: "missing url" }, { status: 400 });
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(requestedUrl);
    } catch {
      return NextResponse.json({ error: "invalid url" }, { status: 400 });
    }

    if (!isAllowedPdfUrl(parsedUrl)) {
      return NextResponse.json({ error: "host not allowed" }, { status: 403 });
    }

    cleanupExpiredEntries();

    const cached = pdfCache.get(requestedUrl);
    if (cached && cached.expiresAt > Date.now()) {
      const cachedBody = cached.bytes.buffer.slice(
        cached.bytes.byteOffset,
        cached.bytes.byteOffset + cached.bytes.byteLength
      ) as ArrayBuffer;

      return new Response(cachedBody, {
        headers: {
          "Content-Type": "application/pdf",
          "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
        },
      });
    }

    const upstream = await fetch(requestedUrl, {
      method: "GET",
      headers: {
        Accept: "application/pdf",
      },
      cache: "no-store",
    });

    if (!upstream.ok) {
      return NextResponse.json({ error: "failed to fetch pdf" }, { status: 502 });
    }

    const bytes = new Uint8Array(await upstream.arrayBuffer());
    pdfCache.set(requestedUrl, {
      bytes,
      expiresAt: Date.now() + CACHE_TTL_MS,
    });

    const freshBody = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);

    return new Response(freshBody, {
      headers: {
        "Content-Type": "application/pdf",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (err) {
    console.error("Error in /api/pdf-proxy:", err);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}