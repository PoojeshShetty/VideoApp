import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useVideo } from '../../hooks/useVideo';
import useVideoContext from '../../hooks/useVideoContext';
import './PlaylistOption.css'

function PlaylistOption({setShowPlaylist}) {

    const {playlists, selectedPlaylist, dispatchVideo} = useVideoContext()
    const [addPlaylistOption, setAddPlaylistOption] = useState(false)
    const [newPlaylistName, setNewPlaylistName] = useState('')
    const {addPlaylist} = useVideo()
    
    const handleCheckbox = (playlist) => {
        if(selectedPlaylist.map(list => list.id).includes(playlist.id)){
            dispatchVideo({type: 'REMOVE_VIDEO_FROM_PLAYLIST', payload: selectedPlaylist.filter(list => list.id !== playlist.id)})
        }else
        {
            dispatchVideo({type: 'ADD_VIDEO_FROM_PLAYLIST', payload: selectedPlaylist.concat(playlist)})
        }
    }

    const handleAddPlaylist = () => {

        addPlaylist(newPlaylistName)
        setAddPlaylistOption(false)
        setNewPlaylistName('')
    }

    const handleCancelAddPlaylist = () => {
        setAddPlaylistOption(false)
        setNewPlaylistName('')
    }

    if(addPlaylistOption)
    return (
        <div className="playlist__option">
            <div className="option__content">
                <div className="addplaylist__title">
                    Add playlist
                </div>
                <input 
                    type="text"
                    placeholder='Name' 
                    value={newPlaylistName}
                    onChange={({target}) => setNewPlaylistName(target.value)}
                />

                {
                    newPlaylistName === "" ?
                    <button className="btn btn--disabled" disabled>Add</button> :
                    <button className="btn" onClick={handleAddPlaylist}>Add</button>
                }

                <button className="btn btn--cancel" onClick={handleCancelAddPlaylist}>Cancel</button>
            </div>
        </div>
    )

    return (
        <div className="playlist__option">
            <div className="option__content">

                <div className="playlist__options">
                    {
                        playlists.map(playlist => (
                            <div className="playlist__item" key={playlist.id}>
                                <input 
                                    type="checkbox" 
                                    checked={selectedPlaylist.map(list => list.id).includes(playlist.id)}
                                    onChange={()=> handleCheckbox(playlist)}
                                /> 
                                <span className='playlistitem__name'>{playlist.name}</span>
                            </div>
                        ))
                    }

                    <div className="playlist__add" onClick={() => setAddPlaylistOption(true) }>
                        <div className="playlistadd__icon">
                            <img src="/svg/add_circle.svg" alt="add" />
                        </div>
                        <span>Add playlist</span>
                    </div>
                </div>

                <button className="btn">Save</button>
                <button className="btn btn--cancel" onClick={() => setShowPlaylist(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default PlaylistOption;
