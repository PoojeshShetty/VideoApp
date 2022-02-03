import {useState} from 'react';
import './PlayList.css'
import { projectFirestore } from '../../config/firebase';
import useVideoContext from '../../hooks/useVideoContext';
const playList = [
    {
        id:1,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/rKPSB8tcXhQ/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg',
    } ,
    {
        id:2,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/rKPSB8tcXhQ/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg',
    } ,
    {
        id:3,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/rKPSB8tcXhQ/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg',
    },
    {
        id:4,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/rKPSB8tcXhQ/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg',
    },
    {
        id:5,
        title:'Test Video',
        ytId: 'TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AAUvwni4mtAMfuk6MoqYaqvMdoJEyF7obLkT-tRPzP3r=s88-c-k-c0x00ffffff-no-rj',
        profileName: 'Poojesh Shetty',
        thumbnailUrl: 'https://i.ytimg.com/vi/rKPSB8tcXhQ/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg',
    }
]

function PlayList({propsPlaylist}) {

  return (
      <div className="playlist__container">
        <div className="playlist__img">
            <img src={propsPlaylist.videos[0].thumbnailUrl} alt="" />

            <div className="playlist__icon">
                <div className="playlist__length">
                    {propsPlaylist.videos.length}
                </div>

                <div className="playlist__svg">
                    <img src="/svg/playList.svg" alt="" />
                </div>
                
            </div>
        </div>
        <div className="playlist__name">
             {propsPlaylist.name}
        </div>
      </div>
  )
}

export default PlayList;
