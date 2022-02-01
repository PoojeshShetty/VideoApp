import {useState,useEffect} from 'react';
import {projectAuth,projectFirestore} from '../config/firebase'
import { useAuthContext } from './useAuthContext';

function useLogin() {

    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {dispatchAuth} = useAuthContext()
    
    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    const login = async (email, password) => {

        setError(null)
        setPending(true)
        try{
            const res = await projectAuth.signInWithEmailAndPassword(email,password)

            const user = await projectFirestore.collection('users').doc(res.user.uid).get()

            dispatchAuth({type: 'ADD_USERID',payload: res.user.uid})

            dispatchAuth({type:'LOGIN',user:{uid:user.id, ...user.data()}})

        }catch(err)
        {
            if(!cancelled)
            {
                setError(err.message)
            }
        }
        setPending(false)
    }

    return {
        login,
        pending, 
        error
    }
}

export default useLogin;
