import React from 'react';
import PlayList from '../../component/playlist/PlayList';
import useVideoContext from '../../hooks/useVideoContext';
import './PlayListPage.css'
import {Link} from 'react-router-dom'

function PlayListPage() {

    const {playlists} = useVideoContext()

    const viewPlaylists = playlists.map(playlist => playlist.videos.length > 0 && (
                    <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
                        <PlayList propsPlaylist={playlist} />
                    </Link>
                ))
        
    if(!viewPlaylists.reduce((a,b) => a||b, false))
    return (
        <div className="playlistpage__container">
          <div className="playlistpage__title">
              PlayLists
          </div>
          <div className="playlistpage__videos">
              No Videos present
          </div>
        </div>
    )

  return (
      <div className="playlistpage__container">
          <div className="playlistpage__title">
              PlayLists
          </div>
          <div className="playlistpage__videos">
              {
                  viewPlaylists
              }
          </div>
      </div>
  )
}

export default PlayListPage;
