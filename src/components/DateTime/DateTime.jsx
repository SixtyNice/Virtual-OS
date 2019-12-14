import React, { Component } from 'react'

export default class DateTime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
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
        let date = this.state.date.toLocaleDateString().replace(/\./g, "/");
        if (date[0] == 0) {
            date = date.slice(1);
        }
        return (
            <div>
                {date}
            </div>
        )
    }
}
