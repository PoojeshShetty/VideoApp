import {useState,useEffect} from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { projectFirestore } from '../../config/firebase';
import LoadingNotes from '../loadingnotes/LoadingNotes';
import NoteText from '../notetext/NoteText';
import './Note.css'
import { useVideo } from '../../hooks/useVideo';

function Note({propsVideo}) {

    const [notevalue, setNoteValue] = useState('')
    const [fetchNotes, setFetchNotes] = useState(null)
    const {uid} = useAuthContext()
    const {addNote,pending} = useVideo()

    useEffect(()=>{
        if(!uid) return

        projectFirestore.collection('notes').doc(uid).collection('videos').doc(propsVideo.id).collection('notes').onSnapshot(docs => {
            if(!docs.empty)
            {
                let result = []
                docs.forEach(doc => result.push({id:doc.id,...doc.data()}))
                result.sort((a,b) => a.createdAt.seconds - b.createdAt.seconds)
                setFetchNotes(result)
            }
            else{
                setFetchNotes([])
            }
        })

    },[uid,propsVideo.id])

    const handleAddNotes = () => {
        if(notevalue === "")
            return
        
        addNote({text:notevalue},propsVideo.id)
        setNoteValue("")
    }

    if(pending)
    return(
        <LoadingNotes />
    )
    
    if(!uid || !fetchNotes)
    return(
        <div className="note__container">

            <div className="note__title">
                Notes
            </div>
            <div className='info--page'>No notes to show</div>

        </div>
    )

    return (
        <div className="note__container">

            <div className="note__title">
                Notes
            </div>
            <div className="note__content">
                
            {
                fetchNotes.map(note=>(
                    <NoteText propNote={note} propsVideo={propsVideo} key={note.id} />
                ))
            }
                
            </div>
            <div className="note__input">
                <input 
                    type="text" 
                    value={notevalue} 
                    placeholder='Take notes'
                    onChange={({target}) => setNoteValue(target.value)}
                />
                <button className='btn' onClick={(e) => handleAddNotes()}>Add</button>
            </div>


        </div>
    )
}

export default Note;
