import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div> 
            <h1 className='h1'>Coder Offroad!</h1>
            <ul className='nav'>
                <a href="#">Motores</a>
                <a href="#">Cajas de cambios</a>
                <a href="#">Diferenciales</a>
                <a href="#">Accesorios</a>
                </ul>
      </div>

    );
}

export default NavBar;