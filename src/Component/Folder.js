import React,{Component} from 'react';
import './Folder.css';
import AddFolder from './Button/AddFolder';


export default class Folder extends Component {


     render(){
         return(
             <div class='folder__container'>
                <div className= "folder-js">
                    <button className='folder__button'>Random Folder</button>
                </div>
             <div><AddFolder/></div>
             </div>
         );
     }
}