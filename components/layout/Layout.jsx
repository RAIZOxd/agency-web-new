'use client';
import { useEffect, useState } from 'react';
import Loading from '../sections/loading/Loading';

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // 1 second delay for demo
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Show loading animation while the page is loading
      ) : (
        <>
         
          {children}
          
        </>
      )}
    </>
  );
}
