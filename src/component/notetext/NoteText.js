import {useState} from 'react'

function NoteText({propNote}) {

    const [editNoteOption, setEditNoteOption] = useState(false)
    const [editNote, setEditNote] = useState(propNote.text)

    const handleEditClick = () => {
        setEditNoteOption(true)
        setEditNote(propNote.text)
    }

    if(editNoteOption)
    return(
        <div className="note">
            <div className="note__text">
                <textarea 
                    value={editNote} 
                    onChange={({target}) => setEditNote(target.value)} 
                    rows="7"
                />
            </div>
            <div className="note__action">
                <button className='btn' onClick={() => setEditNoteOption(false)}>Cancel</button>
                {
                    editNote === "" ?
                    <button className='btn btn--disabled' disabled>Save</button> :
                    <button className="btn">Save</button>
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
                <button className='btn btn--delete'>Delete</button>
            </div>
        </div>
    )
}

export default NoteText;
