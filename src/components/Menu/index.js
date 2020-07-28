import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './menu.css';


function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="aleflix-logo"/>
      </a>

     <Button as="a"  href="/">
        Novo vídeo
     </Button>

    </nav>
  );
}

export default Menu;