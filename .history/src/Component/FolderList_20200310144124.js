import React from 'react';
import Folder from './Folder';
import AddFolder from './Button/AddFolder';

export default class NoteList extends Component {

NoteList(props) {

    return (
      <div className="folder-list">
        {props.notes.map((folder, i) => 
            <Folder {...folder} key= {i}/>        
        )}
      </div>
    )
}
}
