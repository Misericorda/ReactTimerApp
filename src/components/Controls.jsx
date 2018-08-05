import React from 'react';
import PropTypes from 'prop-types';

class Controls extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
  };

  onStatusButtonClick(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus)
    }
  }

  render() {
    let {countdownStatus} = this.props;
    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusButtonClick('paused')}>Pause</button>
      } else {
        return <button className="button primary" onClick={this.onStatusButtonClick('started')}>Start</button>
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusButtonClick('stopped')}>Clear</button>
      </div>
    )
  }
}

export default Controls;
