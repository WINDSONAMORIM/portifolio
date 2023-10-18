
import React, { useState, useEffect } from 'react';
import './style.css';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 425);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`container ${isMobile ? 'mobile' : 'desktop'}`}>
      {children}
    </div>
  );
};

// import React from 'react'
// import './style.css'

// export const Wrapper = ({children}:{children: React.ReactNode }) => {
//     return(
//         <div className="container">
//             {children}
//         </div>
//     )
// }
