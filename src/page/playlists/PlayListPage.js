import React from 'react';
import PlayList from '../../component/playlist/PlayList';
import './PlayListPage.css'

function PlayListPage() {
  return (
      <div className="playlistpage__container">
          <div className="playlistpage__title">
              PlayLists
          </div>
          <div className="playlistpage__videos">
              <PlayList />
              <PlayList />
              <PlayList />
              <PlayList />
              <PlayList />
              <PlayList />
          </div>
      </div>
  )
}

export default PlayListPage;
