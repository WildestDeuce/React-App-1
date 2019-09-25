import React from 'react';
import logo from './logo.svg';
import css from './App.css';
import Wrapper from './components/Wrapper';
import Title from "./components/Title";
import cards from "../src/cards.json";
import MovieCard from './components/MovieCard';

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: []
  };

  componentDidMount() {
    this.setState({
      cards: cards
    })
  }

  shuffle() {
    this.state.cards
  }

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
}


export default App;
