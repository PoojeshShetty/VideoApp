import {createContext,useReducer,useEffect} from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import {initialVideoState, videoReducer} from '../reducer/videoReducer'
import { projectFirestore } from '../config/firebase';

export const VideoContext = createContext()

function VideoContextProvider({children}) {

  const [state, dispatchVideo] = useReducer(videoReducer,initialVideoState)
  const {uid} = useAuthContext()

  useEffect(()=>{
    if(!uid) return

    const getPlaylist = async () => {

        const res = await projectFirestore.collection('playlist').doc(uid).collection('playlist').get()

        if(!res.empty)
        {
          let result = []
          res.docs.forEach(doc => result.push({id:doc.id,...doc.data()}))
          
          dispatchVideo({type: 'PLAYLIST_FROM_SERVER', payload: result})
        }
        
    }

    getPlaylist()

  },[uid])

  useEffect(()=>{
    if(!uid) return

    const getlikeVideos = async () => {

        const res = await projectFirestore.collection('likes').doc(uid).collection('videos').get()

        if(!res.empty)
        {
          let result = []
          res.docs.forEach(doc => result.push({id:doc.id,...doc.data()}))
          dispatchVideo({type: 'LIKES_FROM_SERVER', payload: result})
        }
        
    }

    getlikeVideos()

  },[uid])

  useEffect(()=>{
    if(!uid) return

    const getSavedVideos = async () => {

        const res = await projectFirestore.collection('save').doc(uid).collection('videos').get()

        if(!res.empty)
        {
          let result = []
          res.docs.forEach(doc => result.push({id:doc.id,...doc.data()}))
          dispatchVideo({type: 'SAVE_FROM_SERVER', payload: result})
        }  
    }

    getSavedVideos()

  },[uid])

  return(
      <VideoContext.Provider value={{...state, dispatchVideo}}>
          {children}
      </VideoContext.Provider>
  )
}

export default VideoContextProvider;
