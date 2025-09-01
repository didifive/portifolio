export function FontOptimization() {
  return (
    <>
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Load fonts with display=swap for better performance */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

// Critical CSS inline para melhor FCP
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical above-the-fold styles */
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
          }
          
          /* Hero section critical styles */
          #hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          /* Hide content until hydrated to prevent FOUC */
          .hero-content {
            opacity: 0;
            animation: fadeIn 0.5s ease-in-out forwards;
          }
          
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          
          /* Preload image placeholder */
          .image-placeholder {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }
          
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `,
      }}
    />
  );
}
