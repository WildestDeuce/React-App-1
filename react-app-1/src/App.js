import React from 'react';
import logo from './logo.svg';
import css from './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Title from "./components/Title/Title";
import cards from "../src/cards.json";
import MovieCard from './components/MovieCard/MovieCard';
const underscore = require("underscore");

class App extends React.Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.setState({
      cards: cards
    })
  }

  shuffle = event => {
    event.preventDefault();
    this.state.cards
  }
}

// shuffle() {
//   let shuffleArray = this.state.cards, temporaryValue, randomIndex;

//   while (shuffleArray !== 0) {
//     randomIndex = Math.floor(Math.random() * shuffleArray);
//     shuffleArray = -1;
//     temporaryValue = array[shuffleArray];
//     array[shuffleArray] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }

//pass a function to the on click listener
//images in array
render() {
  return (
    <Wrapper>
      <Title>Card Match</Title>
      {this.state.cards.map(card => (
        <MovieCard
          id={card.id}
          name={card.name}
          image={card.image}
          movie={card.movie}
          shuffle={this.shuffle}
        />
      ))}
    </Wrapper>
  );
}


export default App;