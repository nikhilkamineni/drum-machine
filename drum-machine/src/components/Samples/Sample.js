import React from 'react';
import styled from 'styled-components';

const Pad = styled.div`
  width: 100px;
  height: 100px;
  background: #757575;
  border: 5px solid #333333;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    background-color: #616161;
  }
`;

class Sample extends React.Component {
  clickHandler() {
    this.props.playSound(this.props.context, this.props.gain);
  }

  render() {
    return <Pad onClick={() => this.clickHandler()} />;
  }
}

export default Sample;
