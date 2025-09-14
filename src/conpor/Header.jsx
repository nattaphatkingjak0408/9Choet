import React, { useState } from "react";
import "./Header.css";

const Header = ({setPage}) => {
  const [showSearch, setShowSearch] = useState(false);


  const toggleSearch = (e) => {
    e.preventDefault(); 
    setShowSearch(!showSearch);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" onClick={() => setPage("home")}>
          <img
            className="logo"
            src="https://img5.pic.in.th/file/secure-sv1/9cho.png"
            alt="ภาพ 9choet"
          />
        </a>
        
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div className="headerEX" style={{ position: "relative" }}>
            {!showSearch ? (
              <a href="#" className="icon" onClick={toggleSearch}>
                <img
                  className="GOGO"
                  src="https://img2.pic.in.th/pic/search762aa655cb8a067e.md.png"
                  alt="search"
                />
              </a>
            ) : (
              <input
                type="text"
                className="input"
                placeholder="Search..."
                onBlur={toggleSearch} 
                autoFocus
              />
            )}
          </div>
          
          <div className="headerShop">
            <a href="#" className="icon" onClick={() => setPage("porkira")}>
              <img
                className="GOGO1"
                src="https://img2.pic.in.th/pic/icons8-shop-48.png"
                alt="shop"
              />
            </a>
          </div>
        </div>
        
        <div className='logoleft'>
          <a href="#" className="logoleft" onClick={() => setPage("about")}>
            About Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
