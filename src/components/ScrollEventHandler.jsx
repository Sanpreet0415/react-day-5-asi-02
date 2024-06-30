import React, { useEffect } from 'react';

const ScrollEventHandler = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Document scrolled!');
    };

    // Add event listener when component mounts
    document.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return (
    <div>
      <h2>Scroll Event Handler</h2>
      <p>Open console and scroll to see events.</p>
    </div>
  );
};

export default ScrollEventHandler;
