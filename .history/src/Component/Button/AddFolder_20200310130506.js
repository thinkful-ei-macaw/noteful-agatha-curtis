import React, {Component} from 'react';
import './Button/AddFolder.css'

export default class AddFolder extends Component {
    render(){
        return(
                <section className='adding-folder'>
                    <button className='add-folder-btn' type='button'>
                        +Add Folder
                    </button>
                </section>
        )
    }
}