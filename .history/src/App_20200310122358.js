import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Note from './Note';
import Folder from './Folder';


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
          <Folder />
        </div>
        <div className='Note'>
          <Note />
        </div>
      </main>
    );
  }
}

export default App;
