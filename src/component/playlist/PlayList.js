import './PlayList.css'

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
