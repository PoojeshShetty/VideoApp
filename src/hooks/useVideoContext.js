import {useContext} from 'react';
import { VideoContext } from '../context/VideoContext';

function useVideoContext() {
  
    const context = useContext(VideoContext)

    if(!context)
    console.log("component should be present under video context provider")

    return context
}

export default useVideoContext;
