import React, {Component} from 'react';
import './App.css';
import Header from './Component/Header';
import Note from './Component/Note';
import Folder from './Component/Folder';


class App extends Component {
  state = {
    notes: [],
    folders: [],
  };





render(){  
    return (
      <main id='root'>
        <div className='Header'>
          <Header />
        </div>
        <div className='Folder'>
          
        </div>
        <div className='Note'>
          <Note />
        </div>
      </main>
    );
  }
}

export default App;
