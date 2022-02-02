import {useState} from 'react';
import './AddVideoPage.css'

function AddVideoPage() {

  const [title, setTitle] = useState('')
  const [ytId, setYtId] = useState('')
  const [description, setDescription] = useState('')
  const [profileName, setProfileName] = useState('')
  const [profileImg, setProfileImg] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')

  const handleFormSubmit = (e) => {

    e.preventDefault();

    console.log({
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
        
        <button className='btn'>Add</button>
      </form>
    </div>
  )
}

export default AddVideoPage;
