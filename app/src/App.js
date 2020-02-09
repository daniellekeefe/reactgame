import React, { Component } from "react";
import MovieCard from "./components/MovieCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import movies from "./movies.json";
import Score from "./components/Score";

class App extends Component {
  // Setting this.state.movies to the cards json array
  state = {
    movies,
    clickedMoviesIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the movies cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedMoviesIds = this.state.clickedMoviesIds;

    if (clickedMoviesIds.includes(id)) {
      this.setState({
        clickedMoviesIds: [],
        score: 0,
        status: "Game Over! You lost. Click to play again!"
      });
      return;
    } else {
      clickedMoviesIds.push(id);

      if (clickedMoviesIds.length === 8) {
        this.setState({
          score: 8,
          status: "You Won! Great Job, Smartie! Click to play again!",
          clickedMoviesIds: []
        });
        console.log("You Win");
        return;
      }

      this.setState({
        movies,
        clickedMoviesIds,
        score: clickedMoviesIds.length,
        status: " "
      });
      for (let i = movies.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [movies[i], movies[j]] = [movies[j], movies[i]];
      }
    }
  };

  handleClick = id => {};

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky-Game</h1>
          <p className="App-intro">
          To win, select 8 unique movie cards in a row. Select a duplicate movie and you lose. Good Luck!
          </p>
        </header>
        <Score total={this.state.score} goal={8} status={this.state.status} />

        <Wrapper>
          <Title>Movies</Title>
          {this.state.movies.map(movie => (
            <MovieCard
              handler={this.shuffleScoreCard}
              id={movie.id}
              key={movie.id}
              name={movie.name}
              image={movie.image}
              quote={movie.quote}
              year={movie.year}
            />
          ))}
        </Wrapper>
        <footer>
          <p>
            <a
              href="https://github.com/daniellekeefe/reactgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Check out reactgame on Github here
            </a>
            !
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
