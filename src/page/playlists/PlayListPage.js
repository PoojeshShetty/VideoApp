import React from 'react';
import PlayList from '../../component/playlist/PlayList';
import useVideoContext from '../../hooks/useVideoContext';
import './PlayListPage.css'
import {Link} from 'react-router-dom'

function PlayListPage() {

    const {playlists} = useVideoContext()
    console.log({playlists})

  return (
      <div className="playlistpage__container">
          <div className="playlistpage__title">
              PlayLists
          </div>
          <div className="playlistpage__videos">
              {
                  playlists.map(playlist => (
                      <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
                          <PlayList propsPlaylist={playlist} />
                      </Link>
                  ))
              }
          </div>
      </div>
  )
}

export default PlayListPage;
