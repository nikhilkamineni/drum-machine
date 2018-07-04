import React from 'react';
import styled from 'styled-components';

const colors = {
  kick: ['#660000', '#550000'],
  snare: ['#000066', '#000055'],
  hhopen: ['#555500', '#444400'],
  hhclosed: ['#555500', '#444400'],
  tom1: ['#550055', '#440044'],
  tom2: ['#550055', '#440044'],
  aux1: ['#005500', '#004400'],
  aux2: ['#005500', '#004400'],
};

const Pad = styled.div`
  font-size: 0.5em;
  font-weight: bold;
  width: 70px;
  height: 70px;
  background: ${props => colors[props.name][0]};
  border: 5px solid #333333;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    background-color: ${props => colors[props.name][1]};
  }
`;

class Sample extends React.Component {
  clickHandler() {
    this.props.playSound(this.props.context, this.props.gain);
  }

  render() {
    return <Pad onClick={() => this.clickHandler()} name={this.props.name} />;
  }
}

export default Sample;
