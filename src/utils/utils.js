const videoPresentInPlaylist = (playlist, video) => {

    if(playlist.videos.length === 0) return false

    return playlist.videos.map(vid => vid.id).includes(video.id)
}


export {
    videoPresentInPlaylist
}