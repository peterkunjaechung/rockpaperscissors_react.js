import React from 'react';
import OptionBox from "./components/OptionBox";
import rock from "./images/rock.jpg";
import paper from "./images/paper.jpg";
import scissor from "./images/scissors.jpg";
import { Container, Header, } from "semantic-ui-react";

const PlayerCard = ()=> {
  return(
    <div className="player-card"></div>
  )
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.symbols = ["rock", "paper", "scissors" ]
    this.state = {}
  }

  runGame = () => {
    this.setState({
      playerBlue: this.symbols[Math.floor(Math.random()*3)],
      playerGreen: this.symbols[Math.floor(Math.random()*3)],
    })
  }


  state = { userChoice: null, compChoice: null, };

  optionClick = (option) => {
    
  };

  render() {
    return(
      <div className="App">
        <PlayerCard
        color="blue"
        symbol={this.state.playerBlue} />
        <PlayerCard
        color="green"
        symbol={this.state.playerGreen} />
      <Container style={{ marginTop: "25px", }}>
        <Header as="h1">React Rock, Paper, Scissors game</Header>
        <hr />
        <OptionBox name="rock" img={rock} optionClick={this.optionClick} />
        <OptionBox name="paper" img={paper} />
        <OptionBox name="scissors" img={scissor} />
        <button onClick={this.runGame}>Run game</button>
      </Container>
      </div>
    );
  };
};

export default App;
