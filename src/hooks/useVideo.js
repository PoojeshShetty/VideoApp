import {useState} from 'react';
import useVideoContext from './useVideoContext';

function useVideo() {
    
    const {like, save, dispatchVideo} = useVideoContext()

    const likeVideo = (vedio) => {

        try{

            let newLike = like.concat(vedio)
            dispatchVideo({type: 'LIKE_VIDEO', payload: newLike})

        }catch(err)
        {
            console.log(err.message)
        }

    }

    const removeLike = (vedio) => {

        try{

            let newLike = like.filter(ved => ved.id !== vedio.id)
            dispatchVideo({type:'REMOVE_LIKE', payload: newLike})
        }catch(err)
        {
            console.log(err.message)
        }

    }

    const saveVideo = (video) => {

        try{
            let newSave = save.concat(video)

            dispatchVideo({type: 'SAVE_VIDEO', payload: newSave})
        }catch(err)
        {
            console.log(err.message)
        }
    }

    const removeSave = (vedio) => {

        try{
            
            let newSave = save.filter(ved => ved.id !== vedio.id)

            dispatchVideo({type: 'REMOVE_SAVE', payload: newSave})

        }catch(err)
        {
            console.log(err.message)
        }
    }

    return {
        likeVideo,
        removeLike,
        saveVideo,
        removeSave
    }
}

export {
    useVideo
}
