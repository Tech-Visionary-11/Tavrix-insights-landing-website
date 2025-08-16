"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const CodeBlock = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      // Optionally handle error, e.g., fallback or show message
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-900 text-white rounded-lg p-4 text-xs overflow-x-auto my-4 whitespace-pre-wrap">
        {children}
      </pre>
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-2 right-2 flex items-center space-x-1 bg-gray-800 bg-opacity-80 hover:bg-indigo-600 text-gray-200 rounded px-2 py-1 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
        disabled={copied}
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        <span>{copied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
};
