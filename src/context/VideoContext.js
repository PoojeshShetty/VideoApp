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
          console.log(result)
          dispatchVideo({type: 'PLAYLIST_FROM_SERVER', payload: result})
        }
        

    }

    getPlaylist()

  },[uid])

  return(
      <VideoContext.Provider value={{...state, dispatchVideo}}>
          {children}
      </VideoContext.Provider>
  )
}

export default VideoContextProvider;
