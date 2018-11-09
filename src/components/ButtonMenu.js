import React from 'react';
import '../styles/button_menu.scss';

export default (props) => (
    <div 
        className={'button-menu' + (props.isMenuOpen ? ' is-open' : '')}
        onClick={props.onClick}
    >
        <div></div>
        <div></div>
        {/* <div></div> */}
        <div></div>
        <div></div>
    </div>
)