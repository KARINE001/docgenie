import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to DocGenie</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg cursor-pointer transition">
          <h2 className="text-2xl font-semibold mb-2">✨ Generate from Scratch</h2>
          <p className="text-gray-600">Let the AI help you build your documentation step by step.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg cursor-pointer transition">
          <h2 className="text-2xl font-semibold mb-2">📥 Upload your Content</h2>
          <p className="text-gray-600">Already wrote something? Upload it and we’ll format it properly.</p>
        </div>
      </div>
      <footer className="mt-16 text-center text-sm text-gray-500">
        Built with ❤️ by DocGenie
      </footer>
    </div>
  );
};

export default App;