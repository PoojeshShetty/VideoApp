import { useState } from 'react';
import { useVideo } from '../../hooks/useVideo';
import useVideoContext from '../../hooks/useVideoContext';
import Loading from '../loading/Loading';
import './PlaylistOption.css'
import {videoPresentInPlaylist} from '../../utils/utils'

function PlaylistOption({setShowPlaylist, propsVideo}) {

    const {playlists} = useVideoContext()
    const [addPlaylistOption, setAddPlaylistOption] = useState(false)
    const [newPlaylistName, setNewPlaylistName] = useState('')
    const {addPlaylist,pending, addVideoToPlaylist, removeVideoFromPlaylist} = useVideo()
    
    const handleCheckbox = (playlist) => {
        if(videoPresentInPlaylist(playlist,propsVideo)){
            removeVideoFromPlaylist(playlist, propsVideo)
        }else
        {
            addVideoToPlaylist(playlist,propsVideo)
        }
    }

    const handleAddPlaylist = async () => {

        await addPlaylist(newPlaylistName)

        await setAddPlaylistOption(false)
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
                {
                    pending ?
                    <Loading /> :
                    
                    <input 
                        type="text"
                        placeholder='Name' 
                        value={newPlaylistName}
                        onChange={({target}) => setNewPlaylistName(target.value.trim())}
                    />
                }

                {
                    newPlaylistName === "" ?
                    <button className="btn btn--disabled btn--add" disabled>Add</button> :
                    <button className="btn btn--add" onClick={handleAddPlaylist}>Add</button>
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
                                {
                                    pending ?
                                    <input 
                                        type="checkbox" 
                                        checked={videoPresentInPlaylist(playlist,propsVideo)}
                                        onChange={()=> handleCheckbox(playlist)}
                                        disabled
                                    /> :
                                    <input 
                                        type="checkbox" 
                                        checked={videoPresentInPlaylist(playlist,propsVideo)}
                                        onChange={()=> handleCheckbox(playlist)}
                                    /> 
                                }
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

                <button className="btn btn--cancel" onClick={() => setShowPlaylist(false)}>Close</button>
            </div>
        </div>
    )
}

export default PlaylistOption;
