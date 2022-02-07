import {useEffect} from 'react';
import useToastContext from '../../hooks/useToastContext';
import './Toast.css'

function Toast() {

    const {list, dispatchToast} = useToastContext()

    useEffect(()=>{
        
        const interval = setInterval(()=>{

            if(list.length)
                dispatchToast({type:'CLOSE', payload: list[0].id})
        },1500)
        

        return () => {
            clearInterval(interval)
        }

    },[list,dispatchToast])
    
    const handleClose = (id) => {
        dispatchToast({type:'CLOSE',payload:id})
    }
    
  return (
    <div className="toast__container">
      {
          list.map(note=>(
              <div key={note.id} className='toast__text'>
                <span>{note.text}</span>
                <span className="toast__close" onClick={() => handleClose(note.id)}>
                    <img src="/svg/close.svg" alt="" />
                </span>
            </div>
          ))
      }
    </div>
  )
}

export default Toast;
