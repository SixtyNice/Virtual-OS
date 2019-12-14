import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ time: new Date() })
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        const time = this.state.time.toLocaleTimeString();
        // Time for america
        if (time.endsWith("PM") || time.endsWith("AM")) {
            if (isNaN(Number(time.slice(0, 2)))) {
                return (
                    <div>
                        {time.slice(0, 4) + " " + time.slice(time.length - 2)}
                    </div>
                )
            } else {
                return (
                    <div>
                        {time.slice(0, 5) + " " + time.slice(time.length - 2)}
                    </div>
                )
            }
        }
        return (
            <div>
                {time.slice(0, 5)}
            </div>
        )
    }
}
