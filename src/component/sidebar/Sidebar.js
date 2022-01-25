import React from 'react';
import './Sidebar.css'

function Sidebar({showSidebar, setShowSidebar}) {

  return (
      <div className={showSidebar ? "sidebar__container slide__in" : "sidebar__container"}>
          <div className="sidebar__content">
              Sidebar
          </div>
      </div>
  )
}

export default Sidebar;
