import React,{Component} from 'react';
import './Folder.css';
import AddFolder from './Button/AddFolder';


export default class Folder extends Component {


     render(){
         return(
             <div>
             <section className= "folder-js">I am a Folder</section>
             <div><AddFolder/></div>
             </div>
         );
     }
}