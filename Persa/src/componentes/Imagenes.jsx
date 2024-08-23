import { Fragment } from "react";

function Imagenes() {
    const images = [
      { src: 'https://www.atticgo.com/cdn/shop/files/ATLAS-8766-04-BLANCO---AMB.jpg?crop=center&height=1401&v=1714659528&width=2002', name: 'Modelo A' },
      { src: 'https://www.prensalibre.com/wp-content/uploads/2019/04/hemeroteca-alfombra-semana-santa.jpg?quality=52', name: 'Modelo B' },
      { src: 'https://justhomecollection.com/thumb/?i=https://justhomecollection.com/wp-content/uploads/2018/07/1a.jpg&q=100&w=1000', name: 'Modelo C' }
    ];
  
    return (
      <>
        <div className="imagenes-container">
          {images.map((img, index) => (
            <div key={index} className="imagen">
              <img src={img.src} alt={img.name} />
              <div className="nombre">{img.name}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default Imagenes;