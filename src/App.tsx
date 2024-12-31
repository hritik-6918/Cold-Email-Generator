import React from 'react';
import { EmailGenerator } from './components/EmailGenerator';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <EmailGenerator />
      </main>
      <Footer />
    </div>
  );
}

export default App;