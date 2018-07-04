import React, { Component } from 'react';
import styled from 'styled-components';

// Mixer Styles
const MixerStyled = styled.div`
  color: #999999;
  input[type='range'] {
    -webkit-appearance: none;
    background-color: #616161;
    margin-bottom: 15px;
  }

  input[type='range']:focus {
    outline: none;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
  }

  input[type='range']::-webkit-slider-thumb {
    height: 20px;
    width: 10px;
    border-radius: 0px;
    background: #11BB11;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
`;

// Mixer Component
class Mixer extends Component {
  render() {
    return (
      <MixerStyled>

        Delay Volume:{' '}
        <input
          type='range'
          name='DelayVolume'
          onChange={this.props.mixerHandler}
        /><br />

        Delay Time:{' '}
        <input
          type='range'
          name='DelayTime'
          onChange={this.props.mixerHandler}
        /><br />

        Delay Feedback:{' '}
        <input
          type='range'
          name='DelayFeedback'
          onChange={this.props.mixerHandler}
        /><br />

        Reverb Volume:{' '}
        <input type='range'
          name='ReverbVolume'
          onChange={this.props.mixerHandler}
        /><br />

      </MixerStyled>
    );
  }
}

export default Mixer;
