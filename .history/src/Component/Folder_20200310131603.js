import React,{Component} from 'react';
import './Folder.css';
import AddFolder from './Button/AddFolder';


export default class Folder extends Component {


     render(){
         return(
             <div>
                <div className= "folder-js">
                <p>I am a Folder</p>
                </div>
             <div><AddFolder/></div>
             </div>
         );
     }
}