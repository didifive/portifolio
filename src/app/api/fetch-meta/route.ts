import { NextResponse } from "next/server";

const ALLOWED_HOSTS = new Set(["vetorpessoal.com.br", "www.vetorpessoal.com.br"].map(h => h.toLowerCase()));

function extractMeta(html: string) {
  const ogTitle = /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']\s*\/??>/i.exec(html)?.[1];
  const ogDescription = /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']\s*\/??>/i.exec(html)?.[1];
  const ogImage = /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']\s*\/??>/i.exec(html)?.[1];
  const title = /<title>([^<]+)<\/title>/i.exec(html)?.[1];
  return {
    title: ogTitle || title || null,
    description: ogDescription || null,
    image: ogImage || null,
  };
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url).searchParams.get("url");
    if (!url) return NextResponse.json({ error: "missing url" }, { status: 400 });

    let parsed;
    try {
      parsed = new URL(url);
    } catch (err) {
      console.error("Invalid URL provided to /api/fetch-meta:", err);
      return NextResponse.json({ error: "invalid url" }, { status: 400 });
    }

    if (!ALLOWED_HOSTS.has(parsed.hostname.toLowerCase())) {
      return NextResponse.json({ error: "host not allowed" }, { status: 403 });
    }

    const res = await fetch(url, { method: "GET" });
    if (!res.ok) return NextResponse.json({ error: "failed to fetch" }, { status: 502 });
    const text = await res.text();
    const meta = extractMeta(text);
    return NextResponse.json({ ok: true, meta });
  } catch (err) {
    console.error("Error in /api/fetch-meta:", err);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
