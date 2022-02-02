import {useState, useEffect} from 'react';
import Video from '../../component/video/Video';
import { Link } from 'react-router-dom';
import './ExplorePage.css'
import { useVideo } from '../../hooks/useVideo';
import { projectAuth, projectFirestore } from '../../config/firebase';
import Loading from '../../component/loading/Loading';


function ExplorePage() {

    const [query, setQuery] = useState('')
    const [fetchVideos, setFetchVideos] = useState(null)
    
    useEffect(()=>{
        const fetchVideos = async () => {
            const res = await projectFirestore.collection('videos').get()

            if(!res.empty)
            {
                let result = []
                res.docs.forEach(doc => result.push({id:doc.id, ...doc.data()}))

                setFetchVideos(result)

            }else
            setFetchVideos([])
        }

        window.scrollTo(0,0);
        fetchVideos()
    },[])

    if(!fetchVideos)
    return <Loading />

    let showVideo = fetchVideos

    showVideo = showVideo.map(video => ({...video, srt: Math.random()}))
                        .sort((a,b) => a.srt - b.srt)

    return (
        <div className="explorepage__container">
            <div className="explorepage__title">
                Explore
                <span className='search__input'>
                <input 
                    type="text" 
                    value={query} 
                    onChange={({target}) => setQuery(target.value)}
                    placeholder='Search'/>
            </span>
            </div>

            
            <div className="explorepage__videos">
                {
                    showVideo.map((video)=> 
                        <Link key={video.id} to={`/video/${video.id}`}>
                            <Video propVideo={video} />
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default ExplorePage;
