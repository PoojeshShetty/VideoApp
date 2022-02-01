import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom'

function Sidebar({showSidebar}) {

  return (
      <div className={showSidebar ? "sidebar__container slide__in" : "sidebar__container"}>
          <div className="sidebar__content">
              
            <ul className='sidebar__links'>
                <li>
                    <Link to="/Home">
                        <div className="sidebar__link">
                            <div className="link__img">
                                <img src="/svg/bookmark.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Home
                            </div>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="/explore">
                        <div className="sidebar__link">
                            <div className="link__img">
                                <img src="/svg/bookmark.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Explore
                            </div>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="/playlists">
                        <div className="sidebar__link">
                            <div className="link__img">
                                <img src="/svg/bookmark.svg" alt="" />
                            </div>
                            <div className="link__name">
                                PlayList
                            </div>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="/like">
                        <div className="sidebar__link">
                            <div className="link__img">
                                <img src="/svg/bookmark.svg" alt="" />
                            </div>
                            <div className="link__name">
                                Like
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
          </div>
      </div>
  )
}

export default Sidebar;
