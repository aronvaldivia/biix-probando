import React from 'react';
import { Scene } from './components/Scene';
import { Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/30 backdrop-blur-sm z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">3D Experience</h1>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative h-screen">
        <Scene url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
          <div className="container mx-auto">
            <h2 className="text-white text-4xl font-bold mb-4">
              Interactive 3D Experience
            </h2>
            <p className="text-gray-200 max-w-2xl">
              Explore this interactive 3D scene created with Spline. Click and drag to rotate,
              scroll to zoom, and hover over elements to interact with them.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;