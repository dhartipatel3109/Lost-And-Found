import { useState } from 'react'
import './App.css'
import Topbar from './Components/topbar/Topbar'
import Sidebar from './Components/topbar/sidebar/Sidebar'

function App() {

  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="other">
          other
        </div>
      </div>
    </div>
  );
}

export default App
