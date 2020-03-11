import React,{Component} from 'react';
import './Header.css'

class Header extends Component {
  render(){
    return (
     <header className="app-header">
      <h1><a href='#'>Noteful</a></h1>
      </header>
    )
  };
}



export default Header;