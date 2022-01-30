import {useState} from 'react';
import LoadingNotes from '../loadingnotes/LoadingNotes';
import NoteText from '../notetext/NoteText';
import './Note.css'

const notes = [
    {
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius deleniti aliquid est soluta ipsum consectetur suscipit ipsa tenetur quae voluptas harum ab, voluptates quam nam vel eos officiis voluptatum?",
        id: '2'
    },
    {
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius deleniti aliquid est soluta ipsum consectetur suscipit ipsa tenetur quae voluptas harum ab, voluptates quam nam vel eos officiis voluptatum?",
        id: '3'
    },
    {
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius deleniti aliquid est soluta ipsum consectetur suscipit ipsa tenetur quae voluptas harum ab, voluptates quam nam vel eos officiis voluptatum?",
        id: '4'
    },
    {
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius deleniti aliquid est soluta ipsum consectetur suscipit ipsa tenetur quae voluptas harum ab, voluptates quam nam vel eos officiis voluptatum?",
        id: '5'
    }
]

function Note() {

    const [notevalue, setNoteValue] = useState('')

    return (
        <div className="note__container">

            <div className="note__title">
                Notes
            </div>
            <div className="note__content">
                
                {
                    notes.map(note=>(
                        <NoteText propNote={note} key={note.id} />
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
                <button className='btn'>Add</button>
            </div>


            <LoadingNotes />
        </div>
    )
}

export default Note;
