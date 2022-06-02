import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Add from "./components/Add";
import Filter from "./components/Filter";
import Joker from "./components/images/Joker.jpg";
import TheAvengers from "./components/images/TheAvengers.jpg";
import Parasite from "./components/images/Parasite.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Rating } from "react-simple-star-rating";

function App() {
  const [filter, setFilter] = useState("");
  const [rating, setRating] = useState();
  const [movieList, setMovieList] = useState([
    {
      Title: "Joker",
      Description:
        "American psychological thriller that is set in 1981 Gotham City ",
      PosterURL: Joker,
      rate: 20,
    },
    {
      Title: "TheAvengers",
      Description: "  A drift in space with no food or water",
      PosterURL: TheAvengers,
      rate: 40,
    },
    {
      Title: "Parasite",
      Description: " South Korean dark comedy thriller ",
      PosterURL: Parasite,
      rate: 60,
    },
  ]);

  const addMovie = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  };
  const handleFilter = (val) => {
    setFilter(val);
  };
  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Filter handleFilter={handleFilter} />
        <Rating onClick={handleRating} ratingValue={rating} />

        <div className="row">
          <MovieList
            movies={movieList.filter(
              (elm) =>
                elm.Title.toUpperCase().includes(filter.toUpperCase()) &&
                elm.rate == rating
            )}
          ></MovieList>
          <Add addMovie={addMovie} />
        </div>
      </header>
    </div>
  );
}

export default App;
