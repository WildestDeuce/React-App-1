import React from 'react';
import logo from './logo.svg';
import css from './App.css';
import Wrapper from './components/Wrapper';
import Title from "./components/Title";
import cards from "../src/cards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards
  };


  render() {
    return (
      <Wrapper>
        <Title>Card Match</Title>
        {this.state.cards.map(card => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

function App() {
  return <Wrapper />

}

export default App;
