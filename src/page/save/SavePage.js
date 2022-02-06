import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Video from '../../component/video/Video';
import { useVideo } from '../../hooks/useVideo';
import useVideoContext from '../../hooks/useVideoContext';
import './SavePage.css'

function SavePage() {

    const {save} = useVideoContext()
    const {removeSave, pending} = useVideo()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const handleRemoveSave = (video,e) => {

        e.preventDefault()

        if(!pending)
            removeSave(video)
    }

    if(save.length === 0)
    return (
        <div className='info--page'>No saved videos</div>
    )

  return (
      <div className="savepage__container">
          <div className="savepage__title">
              Save Page
          </div>

          <div className="savepage__videos">
            {
                save.map(video => (
                   
                    <Link className="savepage__video" key={video.id} to={`/video/${video.id}`} >
                        <Video propVideo={video} />

                        <div className="close__btn" onClick={(e) => handleRemoveSave(video,e)}>
                            <img src="/svg/close.svg" alt="" />
                        </div>

                    </Link>
                ))
            }
          </div>
      </div>
  )
}

export default SavePage;
