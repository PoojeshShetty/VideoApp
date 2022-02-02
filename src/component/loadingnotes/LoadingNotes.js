import React from 'react'
import './LoadingNotes.css'

function LoadingNotes() {
    return (
        <div className='loadingnotes__container'>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    )
}

export default LoadingNotes
