import React, { useEffect } from 'react'

function GoogleSearch() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cse.google.com/cse.js?cx=c746f2772762243cf';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return (
        <div className="gcse-search"></div>
      );
}

export default GoogleSearch