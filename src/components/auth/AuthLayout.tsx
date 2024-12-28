import React from 'react';
import { Shield } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <Shield className="w-12 h-12 text-indigo-600 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-900 mt-4">Legum AI</h1>
        <p className="text-gray-500 mt-2">Enterprise Cloud CMS</p>
      </div>
      {children}
    </div>
  </div>
);