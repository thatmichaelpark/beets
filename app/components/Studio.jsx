import React from 'react';
import DrumMachine from 'components/DrumMachine';

const Studio = React.createClass({
  render() {
    const params = this.props.params;

    return <div>
      <h1>You Are in Studio {params.id}</h1>
      <div className="drum-machines">
        <DrumMachine className="machine-left"/>
        <DrumMachine className="machine-right"/>
      </div>
    </div>
  }
});

export default Studio;
