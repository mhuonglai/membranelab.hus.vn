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
          <a className="header--logo">
            {/* <img src="https://static.wixstatic.com/media/7dfa92_87c267c450544aa4b74f64774d348a35~mv2.png/v1/fill/w_447,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7dfa92_87c267c450544aa4b74f64774d348a35~mv2.png"></img> */}
            {/* <h1>Group of Advanced Synthesis and Materials</h1> */}
            <img src='/mai-huong/img/logo-no-background.svg'></img>
            <p>Membrane Technology And Application Lab</p>
          </a>
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
