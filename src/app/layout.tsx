import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow mb-4">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-blue-700 font-bold text-xl">
              Tavrix Insights
            </Link>
            <div className="space-x-2">
              <Link href="/" className="px-2 py-1 rounded text-gray-700 hover:text-blue-700">
                Home
              </Link>
              <Link
                href="/help-docs"
                className="px-2 py-1 rounded text-gray-700 hover:text-blue-700"
              >
                Help Docs
              </Link>
              <Link href="/hiring" className="px-2 py-1 rounded text-gray-700 hover:text-blue-700">
                Hiring
              </Link>
              <Link href="/blogs" className="px-2 py-1 rounded text-gray-700 hover:text-blue-700">
                Blog
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
