import React from 'react';
import './main.scss';
import Panel from './components/Panel/Panel.jsx';
import Weather from './components/Weather/Weather.jsx'

export default function App() {

    return (
        <div className="App">
            <Panel />
            <Weather />
        </div>
    );  
}
