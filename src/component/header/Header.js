import React from 'react';
import './Header.css'

function Header({showSidebar, setShowSidebar}) {

  const handleOpenSidebar = () => {
      setShowSidebar(true)
  }

  const handleClose = () => {
    setShowSidebar(false)
  }

  return (
      <div className="header__container">
          
          <div className="header__content">
            <span className="sidebar__btn" >
                    
                    {
                        !showSidebar ? 
                        <button onClick={handleOpenSidebar}>
                            <img src="/svg/menu.svg" alt="open" />
                        </button> : 
                        <button onClick={handleClose}>
                            <img src="/svg/close.svg" alt="close" />
                        </button>
                    }

                </span>
              <div className="logo">
                  Video App
              </div>
          </div>
      </div>
  )
}

export default Header;
