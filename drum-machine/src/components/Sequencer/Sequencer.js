import React from 'react';
import Sequence from './Sequence'; // eslint-disable-line no-unused-vars
import Timeline from './Timeline'; // eslint-disable-line no-unused-vars
import styled from 'styled-components'; // eslint-disable-line no-unused-vars
import {
  kick,
  snare,
  hhopen,
  hhclosed,
  tom1,
  tom2,
  aux1,
  aux2
} from '../../sounds';

const sounds = {
  kick,
  snare,
  hhopen,
  hhclosed,
  tom1,
  tom2,
  aux1,
  aux2
};

const colors = {
  kick: '#660000',
  snare: '#000066',
  hhopen: '#555500',
  hhclosed: '#555500',
  tom1: '#550055',
  tom2: '#550055',
  aux1: '#005500',
  aux2: '#005500'
};

class Sequencer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     time: this.props.time
  //   };
  // }

  render() {
    return (
      <div style={{ width: '950px' }}>

        {Object.keys(sounds).map((name, index) => {
          return (
            <div
              style={{
                borderLeft: `15px solid ${colors[name]}`,
                marginTop: '5px'
              }}
            >
              <Sequence
                key={index}
                name={name}
                playSound={sounds[name]}
                context={this.props.context}
                gain={this.props.gains[name]}
                clear={this.props.clear}
                unsetClear={this.props.unsetClear}
                currentBeat={this.props.currentBeat}
                sequenceLength={this.props.sequenceLength}
              />
            </div>
          );
        })}
        <Timeline
          currentBeat={this.props.currentBeat}
          sequenceLength={this.props.sequenceLength}
          style={{ width: '800px' }}
        />
      </div>
    );
  }
}

export default Sequencer;
