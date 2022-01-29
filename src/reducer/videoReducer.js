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
        case 'ADD_VIDEO_FROM_PLAYLIST':
            return {...state, selectedPlaylist: action.payload}
        case 'REMOVE_VIDEO_FROM_PLAYLIST':
            return {...state, selectedPlaylist: action.payload}
        case 'ADD_NEW_PLAYLIST':
            return {...state, playlists: action.payload}
        default:
            return state
    }
}

const initialVideoState = {
    like : [],
    playlists : [
        {
            name:'test Video',
            id:'1',
            videos:[
                {
                    id:1,
                    ytId: 'kajdfjasjfls',
                },
                {
                    id:2,
                    ytId: 'kajdfjasjfls',
                }
            ]
        },
        {
            name:'test Video',
            id:'2',
            videos:[
                {
                    id:1,
                    ytId: 'kajdfjasjfls',
                },
                {
                    id:2,
                    ytId: 'kajdfjasjfls',
                }
            ]
        }
    ],
    selectedPlaylist: [],
    save : []
}

export {
    videoReducer,
    initialVideoState
}
