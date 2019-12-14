import React from 'react'
import Clock from '../Clock/Clock.jsx';
import DateTime from '../DateTime/DateTime.jsx';
import IconStart from '../IconStart/IconStart.jsx';
import './Panel.scss';

export default function Panel() {
    return (
        <div className='panel'>
            <IconStart />
            <div className="panel__date-time">
                <div className="panel__time">
                    <Clock />
                </div>
                <div className="panel__date">
                    <DateTime />
                </div>
            </div>
        </div>
    )
}
