import React from 'react';
import '../styles/button_menu.scss';

 const ButtonMenu = (props) => (
    <nav 
        className={'button-menu' + (props.isMenuOpen ? ' is-open' : '')}
        onClick={props.onClick}
    >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </nav>
)

export default ButtonMenu