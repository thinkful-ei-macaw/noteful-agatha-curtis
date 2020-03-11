import React, {Component} from 'react';
import './App.css';
import Header from './Component/Header';
import Note from './Component/NoteList';
import Folder from './Component/FolderList';



class App extends Component {
   constructor(props){
    super(props);
  this.state = {
    notes: [],
    folders: [],
  };
   }




render(){  
    return (
      <main id='main'>
        <div className='Header'>
          <Header />
        </div>
        <div className='FolderList'>
          <FolderList />
        </div>
        <div className='NoteList'>
          <NoteList /> 
        </div>
        <div>
        
        </div>
      </main>
    );
  }
}

export default App;
