
import React from 'react';

const BackToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-unugha-green text-white w-12 h-12 rounded-full shadow-lg hover:bg-unugha-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-unugha-green transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Kembali ke atas"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
