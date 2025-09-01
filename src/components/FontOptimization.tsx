export function FontOptimization() {
  return (
    <>
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </>
  );
}

// Critical CSS minimal para melhor FCP
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Apenas CSS crítico essencial */
          body {
            margin: 0;
            font-family: system-ui, sans-serif;
          }
          
          /* Prevenção de FOUC */
          .hero-loading {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `,
      }}
    />
  );
}
