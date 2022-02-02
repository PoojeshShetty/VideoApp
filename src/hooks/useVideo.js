import {useState} from 'react';
import useVideoContext from './useVideoContext';
import {projectFirestore} from '../config/firebase'
import { useAuthContext } from './useAuthContext';

function useVideo() {
    
    const {like, save,playlists, dispatchVideo} = useVideoContext()
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const {user} = useAuthContext()

    const likeVideo = async (vedio) => {

        setPending(true)
        try{
            
            let newLike = like.concat(vedio)
            dispatchVideo({type: 'LIKE_VIDEO', payload: newLike})

            await projectFirestore.collection(`/likes/${user.uid}/videos`).doc(vedio.id).set(vedio)

        }catch(err)
        {
            console.log(err.message)
        }

        setPending(false)
    }

    const removeLike = async (video) => {

        setPending(true)
        try{
            await projectFirestore.collection(`/likes/${user.uid}/videos`).doc(video.id).delete()

            let newLike = like.filter(ved => ved.id !== video.id)
            dispatchVideo({type:'REMOVE_LIKE', payload: newLike})

        }catch(err)
        {
            console.log(err.message)
        }

        setPending(false)
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

    const addPlaylist = (playlistName) => {

        try{

            let newPlaylist = playlists.concat({id:3,name:playlistName})

            dispatchVideo({type: 'ADD_NEW_PLAYLIST', payload: newPlaylist})
        }catch(err)
        {
            console.log(err.message)
        }
    }

    const addVideo = async (videoObj) => {

        setPending(true)

        try{
            await projectFirestore.collection('videos').add(videoObj)

            setSuccess(true)
        }catch(err){
            console.log(err.message)
        }

        setPending(false)
        
    }

    return {
        likeVideo,
        removeLike,
        saveVideo,
        removeSave,
        addVideo,
        addPlaylist,
        pending,
        success
    }
}

export {
    useVideo
}
