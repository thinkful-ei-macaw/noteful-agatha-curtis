import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      </main>
    );
  }
}

export default App;
