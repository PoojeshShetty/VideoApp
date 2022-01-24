import {useState} from 'react'
import './App.css';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';
function App() {

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="App">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className='App__container'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias voluptatibus accusamus nulla laboriosam neque explicabo facilis. Dignissimos omnis impedit, vitae labore architecto, exercitationem sequi fugit, ducimus explicabo minima consequuntur.
        </div>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
}


export default App;
