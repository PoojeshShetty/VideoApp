import React from 'react';
import './LikePage.css'
import {Link} from 'react-router-dom'
import Video from '../../component/video/Video';
import useVideoContext from '../../hooks/useVideoContext';
import { useVideo } from '../../hooks/useVideo';

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

    const {like} = useVideoContext()
    const {removeLike,pending} = useVideo()

    const handleRemoveLike = (video,e) => {

        e.preventDefault()

        if(!pending)
            removeLike(video)
    }
    
    if(like.length === 0)
    return (
        <div>
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
                    
                        <Link className="likepage__video" key={video.id} to="/video" >
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
