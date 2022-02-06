import React from 'react';
import './Sidebar.css';
import {NavLink} from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';

function Sidebar({showSidebar, setShowSidebar}) {

    const {user} = useAuthContext()
    const {logout} = useLogout()

    const handleLogout = () =>{
        logout()
        closeSidebar()
    }

    const closeSidebar = () => {
        setShowSidebar(false)
    }

  return (
      <div className={showSidebar ? "sidebar__container slide__in" : "sidebar__container"}>
          <div className="sidebar__content">
              
            <ul className='sidebar__links'>
                <li>
                    <NavLink to="/home">
                        <div className="sidebar__link" onClick={closeSidebar}>
                            <div className="link__img">
                                <img src="/svg/home.svg" alt="" />
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
                                <img src="/svg/explore.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Explore
                            </div>
                        </div>
                    </NavLink>
                </li>

                {
                    user && user.type === "admin" && 
                    <li>
                        <NavLink to="/admin/addvideo">
                            <div className="sidebar__link" onClick={closeSidebar}>
                                <div className="link__img">
                                    <img src="/svg/add_circle.svg" alt="" />
                                </div>
                                <div className="link__name">
                                    Add Videos
                                </div>
                            </div>
                        </NavLink>
                    </li>
                }

                <li>
                    <NavLink to="/playlists">
                        <div className="sidebar__link" onClick={closeSidebar}>
                            <div className="link__img">
                                <img src="/svg/playlist_icon.svg" alt="" />
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
                                <img src="/svg/like.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Like
                            </div>
                        </div>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/save">
                        <div className="sidebar__link" onClick={closeSidebar}>
                            <div className="link__img">
                                <img src="/svg/bookmark.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Save
                            </div>
                        </div>
                    </NavLink>
                </li>

                {
                    user ?
                    <li>
                        <div className="sidebar__link btn--logout" onClick={handleLogout}>
                            <div className="link__img">
                                <img src="/svg/logout.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Logout
                            </div>
                        </div>
                    </li> :
                    <li>
                        <NavLink to="/login">
                            <div className="sidebar__link" onClick={closeSidebar}>
                                <div className="link__img">
                                    <img src="/svg/login.svg" alt="" />
                                </div>
                                <div className="link__name">
                                    Login
                                </div>
                            </div>
                        </NavLink>
                    </li>             
                }

            </ul>
          </div>
      </div>
  )
}

export default Sidebar;
