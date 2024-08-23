import { Fragment } from "react";
import Titulo from "./componentes/Titulo";
import './componentes/estilos.css'
import Menu from "./componentes/Menu";
import Imagenes from "./componentes/Imagenes";
import RedesSociales from "./componentes/RedesSociales";
import Carrusel from "./componentes/Carrusel";
import './index.css';

function App(){
  return(
      <>
        <Titulo/>
        <Carrusel/>
        <Menu/>
        <Imagenes/>
        <RedesSociales/>
      </>
  );
}

export default App;