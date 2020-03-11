import React, {Component} from 'react';
import './AddNote.css';

export default class AddNote extends Component {


    render(){
        return(
                <section className='adding-note'>
                    <button className='add-note-btn' type='button'>
                        +Add Note
                    </button>
                </section>
        )
    }
}
