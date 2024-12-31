import React, { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';

interface Props {
  content: string;
}

export function GeneratedEmail({ content }: Props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-lg border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Generated Email</h2>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          {copied ? <CheckCheck size={20} /> : <Copy size={20} />}
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-gray-700 bg-gray-50 p-4 rounded">
        {content}
      </pre>
    </div>
  );
}