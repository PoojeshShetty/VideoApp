import {createContext,useReducer} from 'react';
import {initialVideoState, videoReducer} from '../reducer/videoReducer'

export const VideoContext = createContext()

function VideoContextProvider({children}) {

  const [state, dispatchVideo] = useReducer(videoReducer,initialVideoState)
  return(
      <VideoContext.Provider value={{...state, dispatchVideo}}>
          {children}
      </VideoContext.Provider>
  )
}

export default VideoContextProvider;
