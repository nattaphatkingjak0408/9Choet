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
            onError={(e) => { 
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+OUNoZXQ8L3RleHQ+Cjwvc3ZnPgo=';
            }}
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
