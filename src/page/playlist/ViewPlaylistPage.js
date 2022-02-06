import { useEffect } from 'react';
import './ViewPlaylistPage.css'
import Video from '../../component/video/Video'
import { useParams,Link,useHistory } from 'react-router-dom';
import useVideoContext from '../../hooks/useVideoContext';
import { useVideo } from '../../hooks/useVideo';

function ViewPlayListPage() {

  const {id} = useParams()
  const {playlists} = useVideoContext()
  const {deletePlaylist,success} = useVideo()
  const history = useHistory()

  useEffect(()=>{
    if(!success)
      return

    history.push('/playlists')
  },[success,history])

  useEffect(()=>{
      window.scrollTo(0,0)
  },[])

  const handleDeleteClick = () => {
    deletePlaylist(id)
  }

  const playlist = playlists.find(list => list.id === id)

  if(!playlist)
  return(
    <div className='info--page'>Playlist does not exist</div>
  )
  
  if(playlist.videos.length === 0)
  return(
    <div className="playlistpage__container">
          <div className="playlistpage__title">
           {playlist.name}
          </div>

          <div className="playlist__video">
           <div className='info--page'>Playlist is empty. Add videos to your playlist</div>
          </div>
      </div>
    
  )

  return (
      <div className="playlistpage__container">
          <div className="playlistpage__title">
           
          <span className="title"> {playlist.name}</span>

           <button className="btn btn--delete" onClick={handleDeleteClick}>
            Delete
          </button>
          </div>

          

          <div className="playlist__video">
          {
            playlist.videos.map(video=> (
              <Link className="playlist__videoview" to={`/video/${video.id}`} key={video.id}>
                <Video key={video.id} propVideo={video} />

                <div className="close__btn">
                    <img src="/svg/close.svg" alt="" />
                </div>

              </Link>
            ))
          }
          </div>
      </div>
  )
}

export default ViewPlayListPage;
