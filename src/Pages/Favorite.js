import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavoriteAction, removeFromFavoriteAction } from "../store/actions/action";
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

function Favorite() {
  const favoriteMovie = useSelector(state => state.favorite.movies);
  const dispatch = useDispatch();

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
        {favoriteMovie.map((movie) => {
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
                      <AiFillStar size={24} onClick={(event) => handleFavorites(event, movie)} color="yellow" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
}

export default Favorite;
