import './header.scss';
import logo from '../../images/logo.png';
import menu from '../../images/menu_icon.png';
import React, { useState } from 'react';

function Header() {
    const [drop, setDrop] = useState(false);
    const show = {
        display: "flex"
    };
    const hide = {
        display: "none"
    };
    return (
        <div id="header">
            <div id="header_wrap">
                <a href="#"><img src={logo} id="logo" /></a>
                <img src={menu} id="menu" onClick={() => setDrop(!drop)}/>
                <div id="header_nav">
                    <nav>
                        <div id="header_nav_first">
                            <ul>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Use Cases</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>
                        <div id="header_nav_second">
                            <a href="#">Login</a>
                            <input type="button" value="Get API Keys" />
                        </div>
                    </nav>
                </div>
            </div>
            <div id="drop_hider">
                <div id="header_dropdown" style={drop ? show : hide}>
                    <div>
                        <ul>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Use Cases</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Login</a></li>
                            <li><input type="button" value="Get API Keys" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Header;
