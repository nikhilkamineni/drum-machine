import React from 'react';
import styled from 'styled-components';

const TransportContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #444444;
  margin-top: 20px;
  display: flex;
  align-items: center;
  color: #AAAAAA;
`;

const ButtonStyled = styled.div`
  color: #333333;
  height: 30px;
  background: #AAAAAA;
  padding: 4px 15px;
  margin-left: 10px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #888888;
  }
`;

const BPMLabel = styled.div`
  height: 30px;
  padding: 4px;
  margin-left: 30px;
  font-weight: bold;
`;

const BPM = styled.input`
  height: 30px;
  background: #CCCCCC;
  padding: 4px;
  margin-right: 30px;
  font-weight: bold;
  max-width: 50px;
`;

const PadsToggle = styled.div`
  color: #333333;
  height: 30px;
  background: #AAAAAA;
  padding: 4px 15px;
  margin-left: 100px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #888888;
  }
`;


class Transport extends React.Component {
  render() {
    return (
      <TransportContainer>
        <ButtonStyled onClick={this.props.play}>PLAY</ButtonStyled>
        <ButtonStyled onClick={this.props.pause}>PAUSE</ButtonStyled>
        <ButtonStyled onClick={this.props.stop}>STOP</ButtonStyled>
        <BPMLabel>BPM</BPMLabel>
        <BPM defaultValue="40" onChange={this.props.changeBPM}/>
        <ButtonStyled onClick={() => this.props.clearSequences()}>CLEAR</ButtonStyled>
        <PadsToggle onClick={this.props.togglePads}>CONTROLS</PadsToggle>
      </TransportContainer>
    );
  }
}

export default Transport;
