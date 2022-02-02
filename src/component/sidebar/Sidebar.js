import React from 'react';
import './Sidebar.css';
import {NavLink} from 'react-router-dom'

function Sidebar({showSidebar, setShowSidebar}) {

    const closeSidebar = () => {
        setShowSidebar(false)
    }

  return (
      <div className={showSidebar ? "sidebar__container slide__in" : "sidebar__container"}>
          <div className="sidebar__content">
              
            <ul className='sidebar__links'>
                <li>
                    <NavLink to="/Home">
                        <div className="sidebar__link" onClick={closeSidebar}>
                            <div className="link__img">
                                <img src="/svg/bookmark.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Home
                            </div>
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/explore">
                        <div className="sidebar__link" onClick={closeSidebar}>
                            <div className="link__img">
                                <img src="/svg/bookmark.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Explore
                            </div>
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/playlists">
                        <div className="sidebar__link" onClick={closeSidebar}>
                            <div className="link__img">
                                <img src="/svg/bookmark.svg" alt="" />
                            </div>
                            <div className="link__name">
                                PlayList
                            </div>
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/like">
                        <div className="sidebar__link" onClick={closeSidebar}>
                            <div className="link__img">
                                <img src="/svg/bookmark.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Like
                            </div>
                        </div>
                    </NavLink>
                </li>
            </ul>
          </div>
      </div>
  )
}

export default Sidebar;
