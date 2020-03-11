import React from 'react'
//import { Link } from 'react-router-dom'
import './Note.css';
import AddNote from './Addnote';

export default function Note(props) {
  return (
    <div className='Note__container'>
      <h2 className='Note__title'>
        Random title
      </h2>
      <button className='Note__delete' type='button'>
        remove
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          <span className='Date'>
          
          </span>
        </div>
      </div>
        <Addnote/>
            </div>
  )
}