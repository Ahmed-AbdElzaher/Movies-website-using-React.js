import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addToFavoriteAction, removeFromFavoriteAction } from "../store/actions/action";
import { getMoviessAction } from "../store/actions/moviesAction"
import { LanguageContext } from "./../context/LanguageContext";

function Home() {
  // const [moviesList, setMoviesList] = useState([]);
  const moviesList = useSelector((state) => state.movies.moviesList);
  const dispatch = useDispatch();
  const { contextLang } = useContext(LanguageContext);

  useEffect(() => {
    dispatch(getMoviessAction(contextLang))
    
  }, [contextLang, dispatch]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=8e1b1394bb09a87e5c1b050a5cebede9"
  //     )
  //     .then(res => {
  //       setMoviesList(res.data.results);
  //       console.log('favoriteMovie',favoriteMovie);

  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);


  const favoriteMovie = useSelector(state => state.favorite.movies);

  const handleFavorites = (event , movie) => {
    event.preventDefault();
    if(favoriteMovie.filter(m => m.id === movie.id).length > 0){
      console.log("movie is there")
      dispatch(removeFromFavoriteAction(movie));
      event.target.parentElement.firstChild.setAttribute("color", "white")
    }else{
      dispatch(addToFavoriteAction(movie));
      event.target.parentElement.firstChild.setAttribute("color", "yellow")

    }
  };

  return (
    <>
      <ul>
        {moviesList.map((movie, index) => {
          return (
            <Link key={movie.id} to={`/moviedetails/${movie.id}`}>
              <div className='row floatt space-'>
                <div key={movie.title} className='card m-4'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h5 className='card-text'>{movie.title}</h5>
                    <h6 className='card-text'>{movie.release_date}</h6>
                    <div className="progress">
                      <div className="progress-bar text-start p-2" role="progressbar" style={{width: `${movie.vote_average*10}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Vote Average : {movie.vote_average}</div>
                    </div>
                    <div className="Favorite">
                    <AiFillStar size={24} onClick={(event) => handleFavorites(event, movie)} color={favoriteMovie.filter(m => m.id === movie.id).length > 0 ? 'yellow' : 'white'} />
                      {/* <AiOutlineStar size={24} onClick={(event) => handleFavorites(event, movie)} color="yellow" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
