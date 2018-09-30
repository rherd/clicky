//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import husky from "./husky.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    husky,
    huskyClicked: [],
    score: 0
  };

//when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const currentHusky = event.target.alt;
    const alreadyClicked =
      this.state.huskyClicked.indexOf(currentHusky) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
    if (alreadyClicked) {
      this.setState({
        husky: this.state.husky.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        huskyClicked: [],
        score: 0
      });
        alert("You lose. Press 'OK' to play again.");

//if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          husky: this.state.husky.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          huskyClicked: this.state.huskyClicked.concat(
            currentHusky
          ),
          score: this.state.score + 1
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Congratulations! You won!");
            this.setState({
              husky: this.state.husky.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              huskyClicked: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.husky.map(husky => (
            <FriendCard
              imageClick={this.imageClick}
              id={husky.id}
              key={husky.id}
              image={husky.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;