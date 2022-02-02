import {useEffect,useState} from 'react';
import ReactPlayer from 'react-player';
import Note from '../../component/note/Note';
import PlaylistOption from '../../component/playlistoption/PlaylistOption';
import { useVideo } from '../../hooks/useVideo';
import useVideoContext from '../../hooks/useVideoContext';
import './VideoPage.css'
import { useParams } from 'react-router-dom';

const initVideo ={
    id:1,
    title:'React & TypeScript - Course for Beginners',
        ytId: 'FJDVKeh7RJI',
        description: "Learn how to build React apps using TypeScript. First, learn the basics of TypeScript. Then, learn how to integrate TypeScript in a React app by building an awesome project. You will learn how to use TypeScript with React Hooks such as useState, useRef, and useReducers. You will also learn how to pass props from one component to another by defining prop types of the component. And you will learn much more!",
        profileImg: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        profileName: 'FreeCode Camp',
        thumbnailUrl: 'https://i.ytimg.com/vi/FJDVKeh7RJI/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCMP5VO6ae9bTAxYmzmvCQzIdLhHQ',
} 

function VideoPage() {

    const {likeVideo, removeLike, saveVideo, removeSave} = useVideo()
    const {like,save} = useVideoContext()
    const [showPlaylist, setShowPlaylist] = useState(false)
    const {id} = useParams()
    const [fetchVideo, setFetchVideo] = useState(null)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const handleLike = () => {
        likeVideo(initVideo)
    }

    const handleRemoveLike = () => {
        removeLike(initVideo)
    }
    
    const handleSave = () => {
        saveVideo(initVideo)
    }

    const handleRemoveSave = () => {
        removeSave(initVideo)
    }

    const handleShare = () => {
        navigator.clipboard.writeText(`https://youtube.com`)
    }

    
  return (
      <div className="videopage__container">

        <div className="viewvideo">
          <div className="flex__left">
                <div className="playvideo">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        controls
                        url={`https://www.youtube.com/watch?v=${initVideo.ytId}`}
                    />
                </div>

                <div className="videopage__title">
                    {initVideo.title}
                </div>
                
                
                <div className="videopage__action">

                    {
                        like.map(vedio=>vedio.id).includes(initVideo.id) ?
                        <div className="action" onClick={handleRemoveLike}>
                            <div className="action__img btn--liked">
                                <img src="/svg/like.svg" alt="" />
                            </div>
                            <div className="action__type">
                                Like
                            </div>
                        </div> :
                        <div className="action" onClick={handleLike}>
                            <div className="action__img">
                                <img src="/svg/like.svg" alt="" />
                            </div>
                            <div className="action__type">
                                Like
                            </div>
                        </div>
                    }

                    {
                        save.map(video=>video.id).includes(initVideo.id) ?
                        <div className="action" onClick={handleRemoveSave}>
                            <div className="action__img">
                                <img src="/svg/addedbookmark.svg" alt="" />
                            </div>
                            <div className="action__type">
                                Save
                            </div>
                        </div> :
                        <div className="action" onClick={handleSave}>
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

                    <div className="action" onClick={handleShare}>
                        <div className="action__img">
                            <img src="/svg/share.svg" alt="" />
                        </div>
                        <div className="action__type">
                            Share
                        </div>
                    </div>
                    
                </div>

                <div className="viewvideo__info">
                    
                    <div className="profile">
                        <div className="profile__img">
                            <img src={initVideo.profileImg} alt="profile" />
                        </div>

                        <div className="profile__name">
                            {initVideo.profileName}
                        </div>
                    </div>

                    <div className="videopage__description">
                        {initVideo.description}
                    </div>
                </div>

            </div>

    
            <div className="flex__right">
                <Note />
            </div>
        </div>

        {
            showPlaylist && <PlaylistOption setShowPlaylist={setShowPlaylist}/>
        }

      </div>
  )
}

export default VideoPage;
