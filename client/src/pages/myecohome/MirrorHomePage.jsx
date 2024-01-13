import React, { useEffect, useRef } from 'react';

function MirrorHomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function getWebcamAccess() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    }

    getWebcamAccess();
  }, []);

  return (
    <div  className='grid h-screen w-full'>
      <video ref={videoRef} autoPlay playsInline  className='grid h-screen w-full' />
    </div>
  );
}

export default MirrorHomePage;
