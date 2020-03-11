import React,{Component} from 'react';
import './Folder.css';
import AddFolder from './Button/AddFolder';


export default class Folder extends Component {


     render(){
         return(
             <div>
             <p className= "folder-js">I am a Folder</p>
             <div><AddFolder/></div>
             </div>
         );
     }
}