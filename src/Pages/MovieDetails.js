import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstace } from "../network/axiosConfig";
import axios from "axios";

function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState([]);
    const params = useParams();
    console.log(params);
    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=345e1cf62170222585b22dbfab6d2b1c`
        )
        .then(res => {
            setMovieDetails(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);

  return (
  
    <>
                <div key={movieDetails.title} className='cardDetails m-auto clearfix'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h6 className='card-text'>Title : <h4>{movieDetails.title}</h4></h6>
                    <hr/>
                    <h6 className='card-text'>Overview : <h4 className='overview'>{movieDetails.overview}</h4></h6>
                    <hr/>
                    <h6 className='card-text'>Release :<h4>{movieDetails.release_date}</h4></h6>
                    <hr/>
                    <h6 className='card-text'>Budget :<h4>{movieDetails.budget}</h4></h6>
                    <hr/>
                    <h6 className='card-text'>Language :<h4>{movieDetails.original_language}</h4></h6>
                    <hr/>
                    <h6 className='card-text'>Popularity :<h4>{movieDetails.popularity}</h4></h6>
                    <hr/>
                    <h6 className='card-text'>Runtime :<h4>{movieDetails.runtime}</h4></h6>
                    <hr/>
                    <h6 className='card-text'>Vote average :<h4>{movieDetails.vote_average}</h4></h6>
                    <div class="progress">
                      <div class="progress-bar text-start p-2" role="progressbar" style={{width: `${movieDetails.vote_average*10}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Vote Average</div>
                    </div>
                    <hr/>
                    <h6 className='card-text'>Vote count :<h4>{movieDetails.vote_count}</h4></h6>
                  </div>
                </div>
    </>
  );
}

export default MovieDetails;
