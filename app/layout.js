import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider"; 

export const metadata = {
  title: "MindGen Website",
  description: "MindGen company website migrated to Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        
        {/* THE FIX: Moved the script INSIDE the body so document.body exists when it runs! */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('mindgen-theme');
                  if (storedTheme === 'dark') {
                    document.body.classList.add('theme-dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        <ThemeProvider>
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}