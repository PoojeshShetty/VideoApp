import React from 'react';
import {Link} from 'react-router-dom';
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
              <Link to="/home">
                <div className="logo">
                    <div className="logo__img">
                        <img src="/svg/play_arrow.svg" alt="" />
                    </div>

                    <div className="logo__txt">
                        Video App
                    </div>
                </div>
              </Link>
          </div>
      </div>
  )
}

export default Header;
