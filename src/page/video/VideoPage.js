import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPage.css'

const initVideo ={
    id:1,
    title:'Test Video',
    ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
    profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
    profileName: 'Poojesh Shetty',
    thumbnailUrl: '',
} 

function VideoPage() {
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

                <div className="video__title">
                    {initVideo.title}
                </div>

                <div className="video__action">
                    <div className="action">
                        <div className="action__img">
                            <img src="/svg/like.svg" alt="" />
                        </div>
                        <div className="action__type">
                            Like
                        </div>
                    </div>

                    <div className="action">
                        <div className="action__img">
                            <img src="/svg/bookmark.svg" alt="" />
                        </div>
                        <div className="action__type">
                            Save
                        </div>
                    </div>

                    <div className="action">
                        <div className="action__img">
                            <img src="/svg/playList.svg" alt="" />
                        </div>
                        <div className="action__type">
                            Add
                        </div>
                    </div>

                    <div className="action">
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
                            <img src={initVideo.profileImg} alt="" />
                        </div>

                        <div className="profile__name">
                            {initVideo.profileName}
                        </div>
                    </div>

                    <div className="video__description">
                        {initVideo.description}
                    </div>
                </div>

            </div>

            

            <div className="flex__right">
                <div className="note">
                    Take note
                </div>
            </div>
        </div>

      </div>
  )
}

export default VideoPage;