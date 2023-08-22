import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom'; 

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [showBbtsLinks, setShowBbtsLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleBbtsLinks = () => {
    setShowBbtsLinks(!showBbtsLinks);
  };

  const location = useLocation(); 

  useEffect(() => {
    
    setShowBbtsLinks(false);
  }, [location]); 

  return (
    <header>
      <div className="logo">
        <img src="./public/BB_Tecnologia_e_Servicos-traco-preta.png" alt="" />
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li>
            <div className="button-container">
              <button className='btnLink' onClick={toggleBbtsLinks}>
                BBTS
              </button>
              {showBbtsLinks && (
                <ul className="link-list">
                  <li>
                  <Link to="/Servers">
                    <button className='btnHeader'>
                      Servers
                    </button>
                    </Link>
                  </li>
                  <li>
                  <Link to="/Applications">
                    <button className='btnHeader'>
                     Application
                    </button>
                    </Link>
                  </li>
                  <li>
                  <Link to="/">
                    <button className='btnHeader'>
                     Dash
                    </button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <button className="btnLink">
            <Link to="#">BBA</Link>
          </button>
          <button className="btnLink">
            <Link to="#">SAIR</Link>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
