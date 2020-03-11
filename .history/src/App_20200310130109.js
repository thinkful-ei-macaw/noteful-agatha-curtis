import React, {Component} from 'react';
import './App.css';
import Header from './Component/Header';
import Note from './Component/Note';
import Folder from './Component/Folder';
import AddFolder from './Component/AddFolder';


class App extends Component {
  state = {
    notes: [],
    folders: [],
  };





render(){  
    return (
      <main id='main'>
        <div className='Header'>
          <Header />
        </div>
        <div className='Folder'>
          <Folder/>
        </div>
        <div className='Note'>
          <Note />
        </div>
        <div>
        <AddFolder/>
        </div>
      </main>
    );
  }
}

export default App;
