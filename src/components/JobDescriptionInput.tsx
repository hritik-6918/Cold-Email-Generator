import React from 'react';
import { Send, Loader2 } from 'lucide-react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function JobDescriptionInput({ value, onChange, onGenerate, isGenerating }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="jd" className="block text-sm font-medium text-gray-700 mb-2">
          Paste Job Description
        </label>
        <textarea
          id="jd"
          className="w-full h-48 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Paste the job description here..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      <button
        onClick={onGenerate}
        disabled={isGenerating || !value.trim()}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Send size={20} />
        )}
        {isGenerating ? 'Generating...' : 'Generate Email'}
      </button>
    </div>
  );
}