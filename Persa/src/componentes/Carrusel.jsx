import React, { useState, useEffect } from 'react';

function Carrusel() {
  const images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XhWQ2mRyKZTVj1fCHV9VbeHijfmVIGcv-g&s',
                  'https://alegrapromotora.com/wp-content/uploads/2018/04/Alfombras..jpg',
                  'https://www.basenton.com/wp-content/uploads/2024/04/Carpets.jpg'];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="carrusel">
        <img src={images[currentImage]} alt="banner" />
      </div>
    </>
  );
}

export default Carrusel;
