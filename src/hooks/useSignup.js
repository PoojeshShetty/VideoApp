import {useState, useEffect} from 'react'
import {projectAuth,projectFirestore} from '../config/firebase'
import { useAuthContext } from './useAuthContext'

function useSignup() {

    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const [cancelled, setCancelled] = useState(false)
    const {dispatchAuth} = useAuthContext()

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    const signup = async(email,password,username) => {
        setError(null)
        setPending(true)
        try{

            const res = await projectAuth.createUserWithEmailAndPassword(email,password)

            await projectFirestore.collection('users').doc(res.user.uid).set({
                username,
                email,
                type: 'user'
            })

            dispatchAuth({type: 'ADD_USERID',payload: res.user.uid})
            
            dispatchAuth({type:'LOGIN',payload:{uid:res.user.uid, username, email, type:'user'}})

        }catch(err)
        {
            if(!cancelled)
            {
                setError(err.message)
                setTimeout(()=> setError(null), 7000)
            }
        }
        setPending(false)
    }
    return {
        signup,
        error,
        pending
    }
}

export default useSignup
