import React from 'react';
import styled from 'styled-components';

const LedContainer = styled.div`
  display: flex;
`;

const Led = styled.div`
  height: 20px;
  width: 50px;
  background: ${props => (props.active ? '#00BB00' : '#333333')};
  margin: 0 5px;
`;

class Timeline extends React.Component {
  render() {
    return (
      <LedContainer>
        {[...Array(this.props.sequenceLength).keys()].map((value, index) => {
          return <Led key={index} active={this.props.currentBeat === index} />;
        })}
      </LedContainer>
    );
  }
}

export default Timeline;
