import {useContext} from 'react';
import {ToastContext} from '../context/ToastContext'

function useToastContext() {

    const context = useContext(ToastContext)

    if(!context)
        console.log("Component should be inside the toast provider")
    
    return context
}

export default useToastContext;
