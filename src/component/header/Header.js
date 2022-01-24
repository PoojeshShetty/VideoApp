import React from 'react';
import './Header.css'

function Header({showSidebar, setShowSidebar}) {

  const handleOpenSidebar = () => {
      setShowSidebar(true)
  }
  return (
      <div className="header__container">
          
          <div className="header__content">
            <span className="sidebar__btn" onClick={handleOpenSidebar}>
                    <button>open</button>
                </span>
              <div className="logo">
                  Video App
              </div>
          </div>
      </div>
  )
}

export default Header;
