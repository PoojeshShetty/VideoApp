import {useState} from 'react'
import { useVideo } from '../../hooks/useVideo'

function NoteText({propNote, propsVideo}) {

    const [editNoteOption, setEditNoteOption] = useState(false)
    const [editNoteInput, setEditNoteInput] = useState(propNote.text)
    const {editNote, deleteNote} = useVideo()

    const handleEditNote = () => {
        if(editNoteInput === "") return

        editNote(editNoteInput, propNote.id, propsVideo.id)
        setEditNoteOption(false)
    }

    const handleEditClick = () => {
        setEditNoteOption(true)
        setEditNoteInput(propNote.text)
    }

    const handleDeleteNote = () => {
        deleteNote(propNote.id, propsVideo.id)
    }

    if(editNoteOption)
    return(
        <div className="note">
            <div className="note__text">
                <textarea 
                    value={editNoteInput} 
                    onChange={({target}) => setEditNoteInput(target.value)} 
                    rows="7"
                />
            </div>
            <div className="note__action">
                <button className='btn' onClick={() => setEditNoteOption(false)}>Cancel</button>
                {
                    editNoteInput === "" ?
                    <button className='btn btn--disabled' disabled>Save</button> :
                    <button className="btn" onClick={handleEditNote}>Save</button>
                }
            </div>
        </div>
    )

    return (
        <div className="note">
            <div className="note__text">
                {propNote.text}
            </div>
            <div className="note__action">
                <button className='btn' onClick={handleEditClick}>Edit</button>
                <button className='btn btn--delete' onClick={handleDeleteNote}>Delete</button>
            </div>
        </div>
    )
}

export default NoteText;
