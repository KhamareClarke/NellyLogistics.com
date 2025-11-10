'use client';

import { useEffect, useState } from 'react';
import { Truck } from 'lucide-react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 animate-fade-in">
      {/* Professional background pattern matching homepage */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      {/* Animated background elements matching homepage */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>

          <div className="relative flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl shadow-2xl shadow-blue-500/50 animate-bounce">
            <Truck className="w-16 h-16 text-white animate-pulse" />
          </div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
            Nelly's Logistics
          </h2>
          <p className="text-slate-300 font-medium">Loading your logistics solution...</p>
        </div>

        <div className="w-64 h-2 bg-slate-700/50 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/25" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce shadow-lg shadow-teal-500/25" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce shadow-lg shadow-blue-600/25" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
