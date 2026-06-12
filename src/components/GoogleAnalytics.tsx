import Script from "next/script";

// ⚠️  Replace with your actual Google Analytics Measurement ID
// Get it from: https://analytics.google.com → Admin → Data Streams → Web stream → Measurement ID
const GA_MEASUREMENT_ID = "G-HXPW9V6JV1";

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Default to denied — only enable after cookie consent
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });

          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
