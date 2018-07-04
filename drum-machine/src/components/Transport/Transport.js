import React from 'react';
import styled from 'styled-components';

const TransportContainer = styled.div`
  width: 950px;
  height: 50px;
  background: #444444;
  margin-top: 20px;
  display: flex;
  align-items: center;
  color: #AAAAAA;
`;

const ButtonStyled = styled.div`
  font-size: 0.8em;
  color: #333333;
  height: 30px;
  background: #AAAAAA;
  padding: 6px 15px 2px 15px;
  margin-left: 10px;
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
  border: none;
  color: #333333;
  height: 30px;
  background: #CCCCCC;
  padding: 4px;
  margin-right: 30px;
  max-width: 50px;
  &:hover {
    background-color: #888888;
  }
  &:focus {
    border-color: none;
  }
  &:active {
    border: none;
  }
`;

const PadsToggle = styled.div`
  font-size: 0.8em;
  color: #333333;
  height: 30px;
  background: #AAAAAA;
  padding: 4px 15px;
  margin-left: 100px;
  &:hover {
    cursor: pointer;
    background-color: #888888;
  }
`;


class Transport extends React.Component {
  render() {
    return (
      <TransportContainer>
        <ButtonStyled onClick={this.props.play}>play</ButtonStyled>
        <ButtonStyled onClick={this.props.pause}>pause</ButtonStyled>
        <ButtonStyled onClick={this.props.stop}>stop</ButtonStyled>
        <BPMLabel>bpm</BPMLabel>
        <BPM defaultValue="40" onChange={this.props.changeBPM}/>
        <ButtonStyled onClick={() => this.props.clearSequences()}>clear</ButtonStyled>
        <PadsToggle onClick={this.props.togglePads}>controls</PadsToggle>
      </TransportContainer>
    );
  }
}

export default Transport;
