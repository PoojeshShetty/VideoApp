import {useEffect} from 'react';
import './LikePage.css'
import {Link} from 'react-router-dom'
import Video from '../../component/video/Video';
import useVideoContext from '../../hooks/useVideoContext';
import { useVideo } from '../../hooks/useVideo';

function LikePage() {

    const {like} = useVideoContext()
    const {removeLike,pending} = useVideo()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const handleRemoveLike = (video,e) => {

        e.preventDefault()

        if(!pending)
            removeLike(video)
    }
    
    if(like.length === 0)
    return (
        <div className='info--page'>
            No liked videos
        </div>
    )

    return (
        <div className="likepage__container">
            <div className="likepage__title">
                Liked Videos
            </div>

            <div className="likepage__videos">
                {
                    like.map(video => (
                    
                        <Link className="likepage__video" key={video.id} to={`/video/${video.id}`} >
                            <Video propVideo={video} />

                            <div className="close__btn" onClick={(e) => handleRemoveLike(video,e)}>
                                <img src="/svg/close.svg" alt="" />
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default LikePage;
