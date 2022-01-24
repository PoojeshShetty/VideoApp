import React from 'react';
import './Sidebar.css'

function Sidebar({showSidebar, setShowSidebar}) {

  const handleClose = () => {
      setShowSidebar(false)
  }

  return (
      <div className={showSidebar ? "sidebar__container slide__in" : "sidebar__container"}>
          <div className="sidebar__content">

              <button className='sidebar__close' onClick={handleClose}>Close</button>
              Sidebar
          </div>
      </div>
  )
}

export default Sidebar;
