import React from 'react';
import logo from './logo.svg';
import css from './App.css';
import Container from "../src/components/Container/Container";
import Row from "../src/components/Row/Row";
import Col from "../src/components/Col/Col";
import Hero from "../src/components/Hero/Hero";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Title from "../src/components/Title/Title";
import cards from "../src/cards.json";
import MovieCard from '../src/components/MovieCard/MovieCard';
import underscore from "underscore";

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
    let shuffleArray = underscore.shuffle(this.state.cards)
    event.target.value
    this.state.cards.forEach(element => {

    });

    this.setState({
      cards: shuffleArray
    })
  }


  render() {
    return (
      <Wrapper>
        <Hero backgroundImage="https://images.unsplash.com/photo-1512415031623-5c8392938dc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60">

        </Hero>
        <Container style={{ marginTop: 30 }}>

          <Title>Card Match</Title>
          <Row>
            {this.state.cards.map(card => (
              <Col size="sm-4">
                <MovieCard
                  name={card.name}
                  image={card.image}
                  id={card.id}
                  movie={card.movie}
                  shuffle={this.shuffle}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    )
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




export default App;