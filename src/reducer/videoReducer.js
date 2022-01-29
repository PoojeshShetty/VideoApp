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
        default:
            return state
    }
}

const initialVideoState = {
    like : [],
    playlist : [],
    save : []
}

export {
    videoReducer,
    initialVideoState
}
