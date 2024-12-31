import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-sm">
          Built by hritik6918
          <Heart size={16} className="fill-current text-red-500" />
        </p>
      </div>
    </footer>
  );
}