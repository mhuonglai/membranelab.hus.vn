import React from 'react';
import { Link } from 'react-router-dom';
const navs = [
    {
      text: "Home",
      link: "/home",
    },
    {
      text: "Research",
      link: "/research",
    },
    {
      text: "Publications",
      link: "/publication",
    },
    {
      text: "Members",
      link: "/member",
    },
    
    {
      text: "Photos",
      link: "/photo",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];
const Header = () => {
    return (
        <header className="header">
        <div className="container">
          <div className="header--logo">
            <img src='/img/logo-no-background.svg'></img>
            <p>Membrane Technology And Applications Lab</p>
          </div>
          <nav className="header--nav">
            <ul className="navtab">
              {navs.map((item) => (
                <li className={`navItem ${(item.link == "/member" || item.link == "/publication") ? "dropdown" : ""}`} >
                  <Link className='navLink' to={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
           
          </nav>
        </div>
        
      </header>
    );
}

export default Header;
