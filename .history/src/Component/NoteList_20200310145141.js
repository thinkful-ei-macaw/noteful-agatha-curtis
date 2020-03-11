import React, {Component} from 'react';
import Note from './Note';
import AddNote from './Button/AddNote';

export default class NoteList extends Component {

NoteList(props) {
render() {
    return (
      <section>
        <div className="note-list">
          {props.notes.map((note, i) => 
            <Note {...note} key= {i}/>        
          )};
        </div>
        <div>
          <AddNote />
        </div>
      </section>
    );
}
}
}

