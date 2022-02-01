import {projectAuth} from '../config/firebase'
import { useAuthContext } from './useAuthContext'

function useLogout() {

     const {dispatchAuth} = useAuthContext()

    const logout = async () => {

        try{

            await projectAuth.signOut()

            dispatchAuth({type:'LOGOUT'})

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
