import React from 'react';


class CountdownForm extends React.Component {
    constructor(props) {
        super(props);
    }

    getFormRef = (node) => this.form = node;
    getSecondsRef = (node) => this.seconds = node;


    onSubmit = (e) => {
        e.preventDefault();
        let strSeconds = this.seconds.value;
        if (strSeconds && strSeconds.match(/^[0-9]*$/)) {
            this.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    };

    render() {
        return (
            <div>
                <form ref={this.getFormRef} onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref={this.getSecondsRef} placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
}


module.exports = CountdownForm;