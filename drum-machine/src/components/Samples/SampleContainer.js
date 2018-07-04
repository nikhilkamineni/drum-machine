import React from 'react';
import Sample from './Sample';
import styled from 'styled-components';
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

const Container = styled.div`
margin-right: 50px;
  margin-top: 10px;
  width: 400px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const RowSpacer = styled.div`
  height: 30px;
`;

class SampleContainer extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <Container>
          <Row>
            {Object.keys(sounds)
              .slice(0, 4)
              .map((name, index) => {
                return (
                  <Sample
                    key={index}
                    name={name}
                    playSound={sounds[name]}
                    context={this.props.context}
                    gain={this.props.gains[name]}
                  />
                );
              })}
          </Row>
          <Row>
            {Object.keys(sounds)
              .slice(4)
              .map((name, index) => {
                return (
                  <Sample
                    key={index + 4}
                    name={name}
                    playSound={sounds[name]}
                    context={this.props.context}
                    gain={this.props.gains[name]}
                  />
                );
              })}
          </Row>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default SampleContainer;
