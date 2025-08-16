import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  // Hardcode nav, no hook, all SEO-friendly
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow mb-4">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-blue-700 font-bold text-xl">
              Agent Watch
            </Link>
            <div className="space-x-2">
              {/* Home */}
              <Link href="/" className="px-2 py-1 rounded text-gray-700 hover:text-blue-700">
                Home
              </Link>
              {/* Help Docs (external, new tab) */}
              <a
                href="/help"
                className="px-2 py-1 rounded text-gray-700 hover:text-blue-700"
                target="_blank"
                rel="noopener"
              >
                Help Docs
              </a>
              {/* Hiring */}
              <Link href="/hiring" className="px-2 py-1 rounded text-gray-700 hover:text-blue-700">
                Hiring
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
