import React, {Component} from 'react';
import Folder from './Folder';
import AddFolder from './Button/AddFolder';

export default class FolderList extends Component {

FolderList(props) {
    render(){
    return (
        <div>
            <div className="folder-list">
                {props.notes.map((folder, i) => 
                    <Folder {...folder} key= {i}/>        
                )}
            </div>
            <div>
                <AddFolder/>
            </div>
        </div>
    )
}
}
}
