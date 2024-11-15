import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SignUpHeader() {
  return (
    <header className="text-center mb-8">
      <div className="inline-flex items-center justify-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Student Leaders Hub
        </h1>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Join Our Community</h2>
      <p className="text-gray-600 max-w-md mx-auto">
        Connect with fellow Head Students across the UK, share experiences, and make a bigger impact together!
      </p>
    </header>
  );
}