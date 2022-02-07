import {useEffect,useState} from 'react';
import ReactPlayer from 'react-player';
import Note from '../../component/note/Note';
import PlaylistOption from '../../component/playlistoption/PlaylistOption';
import { useVideo } from '../../hooks/useVideo';
import useVideoContext from '../../hooks/useVideoContext';
import './VideoPage.css'
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../config/firebase';
import Loading from '../../component/loading/Loading';
import { useAuthContext } from '../../hooks/useAuthContext';
import useToastContext from '../../hooks/useToastContext';

function VideoPage() {

    const {likeVideo, removeLike, saveVideo, removeSave, pending} = useVideo()
    const {like,save} = useVideoContext()
    const [showPlaylist, setShowPlaylist] = useState(false)
    const {id} = useParams()
    const [fetchVideo, setFetchVideo] = useState(null)
    const {user} = useAuthContext()
    const {dispatchToast} = useToastContext()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    useEffect(() => {

        const fetchVideo = async () => {
            const res = await projectFirestore.collection('videos').doc(id).get()
            
            if(res.exists)
            {
                setFetchVideo({id:res.id,...res.data()})
            }else
            {
                setFetchVideo('notexist')
            }
        }

        fetchVideo()
    },[id])

    const handleShare = (video) => {
        navigator.clipboard.writeText(`https://videoapp-85262.web.app/video/${video.id}`)
        dispatchToast({type:'ADD',payload: 'Link copied'})
    }

    const handleLike = (video) => {
        if(!pending) 
        likeVideo(video)
    }

    const handleRemoveLike = (video) => {
        if(!pending) 
        removeLike(video)
    }
    
    const handleSave = (video) => {
        if(!pending)
        saveVideo(video)
    }

    const handleRemoveSave = (video) => {
        if(!pending)
        removeSave(video)
    }

    if(!fetchVideo)
    return <Loading />

    if(fetchVideo === 'notexist')
    return (
        <div className='info--page'>Could not find video</div>
    )
  return (
      <div className="videopage__container">

        <div className="viewvideo">
          <div className="flex__left">
                <div className="playvideo">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        controls
                        url={`https://www.youtube.com/watch?v=${fetchVideo.ytId}`}
                    />
                </div>

                <div className="videopage__title">
                    {fetchVideo.title}
                </div>
                
                {
                    user && 
                
                    <div className="videopage__action">

                        {
                            like.map(vedio=>vedio.id).includes(fetchVideo.id) ?
                            <div className="action" onClick={()=>handleRemoveLike(fetchVideo)}>
                                <div className="action__img btn--liked">
                                    <img src="/svg/like.svg" alt="" />
                                </div>
                                <div className="action__type">
                                    Like
                                </div>
                            </div> :
                            <div className="action" onClick={()=>handleLike(fetchVideo)}>
                                <div className="action__img">
                                    <img src="/svg/like.svg" alt="" />
                                </div>
                                <div className="action__type">
                                    Like
                                </div>
                            </div>
                        }

                        {
                            save.map(video=>video.id).includes(fetchVideo.id) ?
                            <div className="action" onClick={()=>handleRemoveSave(fetchVideo)}>
                                <div className="action__img">
                                    <img src="/svg/addedBookmark.svg" alt="" />
                                </div>
                                <div className="action__type">
                                    Save
                                </div>
                            </div> :
                            <div className="action" onClick={() => handleSave(fetchVideo)}>
                                <div className="action__img">
                                    <img src="/svg/bookmark.svg" alt="" />
                                </div>
                                <div className="action__type">
                                    Save
                                </div>
                            </div>
                        }

                        <div className="action" onClick={() => setShowPlaylist(true)}>
                            <div className="action__img">
                                <img src="/svg/playList.svg" alt="" />
                            </div>
                            <div className="action__type">
                                Add
                            </div>
                        </div>

                        <div className="action" onClick={() => handleShare(fetchVideo)}>
                            <div className="action__img">
                                <img src="/svg/share.svg" alt="" />
                            </div>
                            <div className="action__type">
                                Share
                            </div>
                        </div>
                        
                    </div>                              
                }
                <div className="viewvideo__info">
                    
                    <div className="profile">
                        <div className="profile__img">
                            <img src={fetchVideo.profileImg} alt="profile" />
                        </div>

                        <div className="profile__name">
                            {fetchVideo.profileName}
                        </div>
                    </div>

                    <div className="videopage__description">
                        {fetchVideo.description}
                    </div>
                </div>

            </div>

    
            <div className="flex__right">
                <Note propsVideo={fetchVideo}/>
            </div>
        </div>

        {
            showPlaylist && <PlaylistOption setShowPlaylist={setShowPlaylist} propsVideo={fetchVideo} />
        }

      </div>
  )
}

export default VideoPage;
