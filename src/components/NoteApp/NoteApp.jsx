import React, { Component } from 'react'
import './NoteApp.scss';
import '../Notes/Notes.jsx';



export default class NoteApp extends Component {
    render() {
        return (
            <div className="note-app">
                <div className="note-app__lines">

                <div className="note-app__line"></div>
                <div className="note-app__line"></div>
                <div className="note-app__line"></div>
                <div className="note-app__line"></div>
                <div className="note-app__line"></div>
                <div className="note-app__line"></div>
            </div>
            </div>
        )
    }
}
