import React from 'react';
import './Video.css'

function Video({propVideo}) {
  return (
      <div className="video__container">
          <div className="video__img">
              <img src={propVideo.thumbnailUrl} alt="" />
          </div>

          <div className="video__title">
                {propVideo.title}
            </div>
            
          <div className="video__info">
              <div className="video__profile">
                  <img src={propVideo.profileImg} alt="" />
              </div>

              <div className="video__text">

                <div className="video__profilename">
                    {propVideo.profileName}
                </div>
              </div>
          </div>

          <div className="play__icon">
              <img src="/svg/play_arrow.svg" alt="" />
          </div>
      </div>
  )
}

export default Video;
