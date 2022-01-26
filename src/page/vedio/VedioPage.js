import React from 'react';
import ReactPlayer from 'react-player';
import './VedioPage.css'

const initVedio = {
    title:'Test Vedio',
    ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impedit sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
    profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
    profileName: 'Poojesh Shetty'
}

function VedioPage() {
  return (
      <div className="vediopage__container">

        <div className="viewvedio">
          <div className="flex__left">
                <div className="playvedio">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        controls
                        url={`https://www.youtube.com/watch?v=${initVedio.ytId}`}
                    />
                </div>

                <div className="vedio__title">
                    {initVedio.title}
                </div>

                <div className="vedio__action">
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

                <div className="viewvedio__info">
                    
                    <div className="profile">
                        <div className="profile__img">
                            <img src={initVedio.profileImg} alt="" />
                        </div>

                        <div className="profile__name">
                            {initVedio.profileName}
                        </div>
                    </div>

                    <div className="vedio__description">
                        {initVedio.description}
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

export default VedioPage;
