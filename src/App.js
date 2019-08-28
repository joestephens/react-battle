import React, { Component } from 'react';
import Versus from './components/Versus';
import AddPlayer from './components/AddPlayer';
import Players from './components/Players';
import Fight from './components/Fight';

class App extends Component {
  constructor () {
    super();

    this.state = {
      player1: 'Player 1',
      player2: 'Player 2',
      players: [],
      nameInput: '',
      winner: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
    this.handleSetPlayer1 = this.handleSetPlayer1.bind(this);
    this.handleSetPlayer2 = this.handleSetPlayer2.bind(this);
  }

  componentDidMount() {
    console.log('component has now mounted to the DOM')

    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated')
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('state', this.state);
  }

  handleNameChange(event) {
    const name = event.target.value;

    this.setState({
      nameInput: name
    })
  }

  handleAddPlayer() {
    this.setState({
      players: this.state.players.concat([this.state.nameInput])
    })
  }

  handleSetPlayer1(name) {
    this.setState({
      player1: name
    })
  }

  handleSetPlayer2(name) {
    this.setState({
      player2: name
    })
  }

  handleFight = () => {
    const player1Wins = Math.random() < 0.5;
    
    this.setState({
      winner: player1Wins ? 'player1' : 'player2'
    })
  }

  render () {
    const { player1, player2, winner, nameInput, players } = this.state;
    
    console.log('component render has been called')

    return (
      <div>
        <h1>React Battle</h1>
        <Versus player1={player1} player2={player2} />
        <Fight winner={winner} onFight={this.handleFight} />
        <Players 
          players={players} 
          onSetPlayer1={this.handleSetPlayer1}
          onSetPlayer2={this.handleSetPlayer2}
        />
        <AddPlayer 
          nameInput={nameInput} 
          onAddPlayer={this.handleAddPlayer}
          onNameChange={this.handleNameChange}
        />
      </div>
    );
  }
}

export default App;
