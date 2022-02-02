import {useState, useEffect} from 'react';
import { useVideo } from '../../../hooks/useVideo';
import './AddVideoPage.css'
import {useHistory} from 'react-router-dom'

function AddVideoPage() {

  const [title, setTitle] = useState('')
  const [ytId, setYtId] = useState('')
  const [description, setDescription] = useState('')
  const [profileName, setProfileName] = useState('')
  const [profileImg, setProfileImg] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const {addVideo, pending, success} = useVideo()
  const history = useHistory()

  useEffect(()=>{
    if(!success) return

    history.push('/explore')
  },[success,history])

  const handleFormSubmit = (e) => {

    e.preventDefault();

    addVideo({
      title,
      ytId,
      description,
      profileImg,
      profileName,
      thumbnailUrl
    })
  }

  return (
    <div className="addvideo__container">
  
      <form className="addvideo__form" onSubmit={(e) => handleFormSubmit(e)}>

        <div className="addvideo__title">
          Add Video
        </div>

        <div className="form__controle">
          <label>Title</label>
          <input 
            type="text" 
            placeholder='Title'
            value={title}
            onChange={({target}) => setTitle(target.value)}
            required
          />
        </div>
        
        <div className="form__controle">
          <label>Youtube Id</label>
          <input 
            type="text" 
            placeholder='Youtube Id'
            value={ytId}
            onChange={({target}) => setYtId(target.value)}
            required
          />
        </div>
        
        <div className="form__controle">
          <label>Description</label>
          <input 
            type="text" 
            placeholder='Description'
            value={description}
            onChange={({target}) => setDescription(target.value)}
            required
          />
        </div>
        
        <div className="form__controle">
          <label>Profile Name</label>
          <input 
            type="text" 
            placeholder='Profile Name'
            value={profileName}
            onChange={({target}) => setProfileName(target.value)}
            required
          />
        </div>
        
        <div className="form__controle">
          <label>Profile Image Url</label>
          <input 
            type="text" 
            placeholder='Profile Image Url'
            value={profileImg}
            onChange={({target}) => setProfileImg(target.value)}
            required
          />
        </div>
        
        <div className="form__controle">
          <label>Thumbnail Url</label>
          <input 
            type="text" 
            placeholder='Thumbnail Url'
            value={thumbnailUrl}
            onChange={({target}) => setThumbnailUrl(target.value)}
            required
          />
        </div>
        
        {
          pending ?
          <button className='btn btn--disabled' disabled>Adding</button> :
          <button className='btn'>Add</button>
        }

      </form>
    </div>
  )
}

export default AddVideoPage;
