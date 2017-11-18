import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clockStatus: 'stopped',
            time: 0
        }
    }

    handleStatusChange = (newStatus) => {
        this.setState({clockStatus: newStatus})
    };
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    startTimer() {
        this.timer = setInterval(() => {
            let newCount = this.state.time + 1;
            this.setState({
                time: newCount,
            });
        }, 1000);
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.clockStatus !== prevState.clockStatus) {
            switch (this.state.clockStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({time: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    };

    render() {
        let {timer, clockStatus} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer app</h1>
                <Clock totalSeconds={this.state.time}/>
                <Controls countdownStatus={clockStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
}

module.exports = Timer;