import {useState} from 'react'
import './App.css';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './page/login/LoginPage'
import SignupPage from './page/signup/SignupPage';
import HomePage from './page/home/HomePage';
import VideoPage from './page/video/VideoPage';
import PlayListPage from './page/playlists/PlayListPage';
import ViewPlayListPage from './page/playlist/ViewPlaylistPage';
import ExplorePage from './page/explore/ExplorePage';
import LikePage from './page/like/LikePage';
import SavePage from './page/save/SavePage';
import { useAuthContext } from './hooks/useAuthContext';
import AddVideoPage from './page/admin/addVideo/AddVideoPage';
import Loading from './component/loading/Loading';
import Toast from './component/toast/Toast';

function App() {

  const [showSidebar, setShowSidebar] = useState(false)
  const {user,isAuthReady} = useAuthContext()

  if(!isAuthReady)
  return (
    <Loading />
  )

  return (
    <div className="App">

        <Toast />
        
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

          <div className="App__container">

          <Switch>

            <Route path="/login" exact>
              {user && <Redirect to="/home" />}
              {!user && <LoginPage />}
            </Route>

            <Route path="/signup" exact>
              {user && <Redirect to="/home" />}
              {!user && <SignupPage />}
            </Route>

            <Route path="/home" exact>
              <HomePage />
            </Route>

            <Route path="/video/:id" exact>
              <VideoPage />
            </Route>

            <Route path="/playlists" exact>
              
              {!user && <Redirect to="/login" />}
              {user && <PlayListPage />}
            </Route>

            <Route path="/playlist/:id" exact>
              
              {!user && <Redirect to="/login" />}
              {user && <ViewPlayListPage />}
            </Route>
            
            <Route path="/explore" exact>
              
              <ExplorePage />
            </Route>
            
            <Route path="/like" exact>
              
              {!user && <Redirect to="/login" />}
              {user && <LikePage />}
            </Route>
            
            <Route path="/save" exact>
              
              {!user && <Redirect to="/login" />}
              {user && <SavePage />}
            </Route>

            <Route path="/admin/addVideo" exact>
              
              {!user && <Redirect to="/login" />}
              {user && user.type==="admin" && <AddVideoPage />}
            </Route>

            
            <Route path="/" exact>
              {<Redirect to="/home" />}
            </Route>

            <Route path="*">
              <div className='info--page'>404 page not found</div>
            </Route>
          </Switch>

          </div>
          
          
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

    </div>
  );
}


export default App;
