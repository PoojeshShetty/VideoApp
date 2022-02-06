const videoReducer = (state, action) => {

    switch(action.type){

        case 'LIKE_VIDEO':
            return {...state, like: action.payload}
        case 'REMOVE_LIKE':
            return {...state, like: action.payload}
        case 'SAVE_VIDEO':
            return {...state, save: action.payload}
        case 'REMOVE_SAVE':
            return {...state, save: action.payload}
        case 'ADD_NEW_PLAYLIST':
            return {...state, playlists: action.payload}
        case 'PLAYLIST_FROM_SERVER':
            return {...state, playlists: action.payload}
        case 'REMOVE_PLAYLIST':
            return {...state, playlists: action.payload}
        case 'LIKES_FROM_SERVER':
            return {...state, like: action.payload}
        case 'SAVE_FROM_SERVER':
            return {...state, save: action.payload}
        case 'ADD_VIDEO_TO_PLAYLIST':
            return {...state, playlists: action.payload}
        case 'REMOVE_VIDEO_FROM_PLAYLIST':
            return {...state, playlists: action.payload}
        case 'LOGOUT':
            return {...initialVideoState}
        default:
            return state
    }
}

const initialVideoState = {
    like : [],
    playlists : [],
    save : []
}

export {
    videoReducer,
    initialVideoState
}
