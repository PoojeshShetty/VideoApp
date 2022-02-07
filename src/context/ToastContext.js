import {useReducer,createContext} from 'react'

const initialState = {
    list:[]
}

const generateRandomId = () =>  Math.floor(Math.random()*10000)

const toastReducer = (state, action) => {
    switch(action.type)
    {
        case 'ADD':
            {
                let listCp = state.list
                const message = {
                    id:generateRandomId(),
                    text:action.payload
                }
                return {...state, list:listCp.concat(message)}
            }
        case 'CLOSE':
            {
                let id = action.payload
                return{...state, list:state.list.filter(tst => tst.id!==id)}
            }
        default:
            return state
    }
}

export const ToastContext = createContext()

function ToastContextProvider({children}) {
    const [toastState,dispatchToast] = useReducer(toastReducer,initialState)
    return (
        <ToastContext.Provider value={{...toastState,dispatchToast}}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastContextProvider
