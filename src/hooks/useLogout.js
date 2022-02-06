import {projectAuth} from '../config/firebase'
import { useAuthContext } from './useAuthContext'
import useVideoContext from './useVideoContext'

function useLogout() {

     const {dispatchAuth} = useAuthContext()
     const {dispatchVideo} = useVideoContext()

    const logout = async () => {

        try{

            await projectAuth.signOut()

            dispatchAuth({type:'LOGOUT'})

            dispatchVideo({type: 'LOGOUT'})

        }catch(err)
        {
            console.log(err.message)
        }

    }

    return {
        logout
    }
}

export{
    useLogout
} 
