import {useState} from 'react'
import './App.css';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';
import  {Switch, Route} from 'react-router-dom'
import LoginPage from './page/login/LoginPage'
import SignupPage from './page/signup/SignupPage';
import HomePage from './page/home/HomePage';
import VideoPage from './page/video/VideoPage';
import useVideoContext from './hooks/useVideoContext';
import PlayListPage from './page/playlists/PlayListPage';
import ViewPlayListPage from './page/playlist/ViewPlaylistPage';
import ExplorePage from './page/explore/ExplorePage';

function App() {

  const [showSidebar, setShowSidebar] = useState(false)

  const context = useVideoContext()

  console.log(context)

  return (
    <div className="App">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

          <div className="App__container">

          <Switch>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/signup">
              <SignupPage />
            </Route>

            <Route path="/home">
              <HomePage />
            </Route>

            <Route path="/video">
              <VideoPage />
            </Route>

            <Route path="/playlists">
              <PlayListPage />
            </Route>

            <Route path="/playlist">
              <ViewPlayListPage />
            </Route>
            
            <Route path="/explore">
              <ExplorePage />
            </Route>
            
          </Switch>

          </div>
          
          
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
}


export default App;
