import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
    </div>
  );
};