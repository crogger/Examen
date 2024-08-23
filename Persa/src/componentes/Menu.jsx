import { Fragment } from "react";

function Menu() {
    return (
        <>
      <nav className="menu">
        <ul>
          <li><a href="#liquidacion">Liquidación</a></li>
          <li><a href="#oriental">Oriental</a></li>
          <li><a href="#modernas">Modernas</a></li>
          <li><a href="#exterior">Exterior</a></li>
          <li><a href="https://paginaexterna.com" target="_blank" rel="noopener noreferrer">Contáctenos</a></li>
        </ul>
      </nav>
      </>
    );
  }
  
  export default Menu;