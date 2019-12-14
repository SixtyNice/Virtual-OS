import React from 'react';
import './main.scss';
import Panel from './components/Panel/Panel.jsx';
import Weather from './components/Weather/Weather.jsx'
import NoteApp from './components/NoteApp/NoteApp';

export default function App() {

    return (
        <div className="App">
            <Weather />

            <NoteApp />
            <Panel />
        </div>
    );
}
