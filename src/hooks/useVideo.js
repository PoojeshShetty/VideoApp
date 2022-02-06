import {useState,useEffect} from 'react';
import useVideoContext from './useVideoContext';
import {projectFirestore,timeStamp} from '../config/firebase'
import { useAuthContext } from './useAuthContext';

function useVideo() {
    
    const {like, save,playlists, dispatchVideo} = useVideoContext()
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {user} = useAuthContext()

    useEffect(()=>{
        return () => setCancelled(true)
    },[])

    const likeVideo = async (video) => {

        setPending(true)
        try{
            
            await projectFirestore.collection(`/likes/${user.uid}/videos`).doc(video.id).set(video)

            let newLike = like.concat(video)
            dispatchVideo({type: 'LIKE_VIDEO', payload: newLike})

        }catch(err)
        {
            console.log(err.message)
        }
        
        if(!cancelled)
            if(!cancelled)
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

        if(!cancelled)
            setPending(false)
    }

    const saveVideo = async (video) => {

        setPending(true)

        try{

            await projectFirestore.collection(`/save/${user.uid}/videos`).doc(video.id).set(video)

            let newSave = save.concat(video)

            dispatchVideo({type: 'SAVE_VIDEO', payload: newSave})
        }catch(err)
        {
            console.log(err.message)
        }

        if(!cancelled)
            setPending(false)
    }

    const removeSave = async (video) => {

        setPending(true)
        try{
            
            await projectFirestore.collection(`/save/${user.uid}/videos`).doc(video.id).delete()

            let newSave = save.filter(ved => ved.id !== video.id)

            dispatchVideo({type: 'REMOVE_SAVE', payload: newSave})

        }catch(err)
        {
            console.log(err.message)
        }

        if(!cancelled)
            setPending(false)
    }

    const addPlaylist = async (playlistName) => {

        setPending(true)

        try{

            const res = await projectFirestore.collection('playlist').doc(user.uid).collection('playlist').add({
                name: playlistName,
                videos: []
            })

            let newPlaylist = await playlists.concat({id:res.id,name:playlistName, videos: []})

            dispatchVideo({type: 'ADD_NEW_PLAYLIST', payload: newPlaylist})

        }catch(err)
        {
            console.log(err.message)
        }

        if(!cancelled)
            setPending(false)
    }

    const addVideo = async (videoObj) => {

        setPending(true)

        try{
            await projectFirestore.collection('videos').add(videoObj)

            setSuccess(true)
        }catch(err){
            console.log(err.message)
        }

        if(!cancelled)
            setPending(false)
        
    }

    const addVideoToPlaylist = async (playlist, video) => {

        setPending(true)

        try{

            let newPlaylists = playlists
            let newVideos = []
            newPlaylists = newPlaylists.map(list => {
                if(list.id !== playlist.id)
                    return list
                newVideos = list.videos.concat(video)

                return {...list, videos: list.videos.concat(video)}
            })

            console.log({newVideos})

            await projectFirestore.collection('playlist').doc(user.uid).collection('playlist').doc(playlist.id).update({
                videos: newVideos
            })

            dispatchVideo({type: 'ADD_VIDEO_TO_PLAYLIST', payload: newPlaylists})

        }catch(err){
            console.log(err.message)
        }

        if(!cancelled)
            setPending(false)
    }

    const removeVideoFromPlaylist = async (playlist, video) => {

        setPending(true)

        try{

            let newPlaylists = playlists
            let newVideos = []
            newPlaylists = newPlaylists.map(list => {
                if(list.id !== playlist.id)
                    return list
                newVideos = list.videos.filter(vid => vid.id !== video.id)
                return {...list, videos: list.videos.filter(vid => vid.id !== video.id)}
            })

            console.log({newVideos})
            
            await projectFirestore.collection('playlist').doc(user.uid).collection('playlist').doc(playlist.id).update({
                videos: newVideos
            })

            dispatchVideo({type: 'REMOVE_VIDEO_FROM_PLAYLIST', payload: newPlaylists})

        }catch(err){
            console.log(err.message)
        }

        if(!cancelled)
            setPending(false)
    }

    const addNote = async (note,videoId) => {

        setPending(true)

        try{

            const createdAt = await timeStamp.fromDate(new Date())

            await projectFirestore.collection('notes').doc(user.uid).collection('videos').doc(videoId).collection('notes').add({
                ...note, createdAt
            })
        }catch(err)
        {
            console.log(err.message)
        }
        if(!cancelled)
            setPending(false)
    }

    const editNote = async (note,noteId,videoId) => {

        setPending(true)

        try{
            await projectFirestore.collection('notes').doc(user.uid).collection('videos').doc(videoId).collection('notes').doc(noteId).update({
                text:note
            })
        }catch(err)
        {
            console.log(err.message)
        }
        if(!cancelled)
            setPending(false)
    }
    
    const deleteNote = async (noteId,videoId) => {

        setPending(true)

        try{
            await projectFirestore.collection('notes').doc(user.uid).collection('videos').doc(videoId).collection('notes').doc(noteId).delete()
        }catch(err)
        {
            console.log(err.message)
        }
        if(!cancelled)
            setPending(false)
    }
    
    const deletePlaylist = async (playlistId) => {

        setPending(true)

        try{
            await  projectFirestore.collection('playlist').doc(user.uid).collection('playlist').doc(playlistId).delete()

            let newPlaylist = await playlists.filter(play => play.id !== playlistId)

            dispatchVideo({type: 'REMOVE_PLAYLIST', payload: newPlaylist})

            setSuccess(true)
        }catch(err)
        {
            console.log(err.message)
        }

        if(!cancelled)
            setPending(false)
    }

    return {
        likeVideo,
        removeLike,
        saveVideo,
        removeSave,
        addVideo,
        addPlaylist,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
        addNote,
        editNote,
        deleteNote,
        deletePlaylist,
        pending,
        success,
        error
    }
}

export {
    useVideo
}
