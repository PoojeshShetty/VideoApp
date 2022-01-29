import React from 'react';
import './LikePage.css'
import {Link} from 'react-router-dom'
import Video from '../../component/video/Video';

const initVideo = [
    {
        id:1,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/Hf2esGA7vCc/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLDg6dVePlLqL1HkHQ5RiD0sW2fuZQ',
    } ,
    {
        id:2,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/Hf2esGA7vCc/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLDg6dVePlLqL1HkHQ5RiD0sW2fuZQ',
    } ,
    {
        id:3,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/Hf2esGA7vCc/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLDg6dVePlLqL1HkHQ5RiD0sW2fuZQ',
    },
    {
        id:4,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/Hf2esGA7vCc/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLDg6dVePlLqL1HkHQ5RiD0sW2fuZQ',
    },
    {
        id:5,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/Hf2esGA7vCc/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLDg6dVePlLqL1HkHQ5RiD0sW2fuZQ',
    }
]

function LikePage() {
  return (
      <div className="likepage__container">
          <div className="likepage__title">
              Liked Videos
          </div>

          <div className="likepage__videos">
            {
                initVideo.map(video => (
                   
                    <Link className="likepage__video" key={video.id} to="/video" >
                        <Video propVideo={video} />

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

export default LikePage;