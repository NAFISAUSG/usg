import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'booking'>('home');

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onBookCall={() => setCurrentPage('booking')} />
        )}
        {currentPage === 'booking' && <BookingPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
