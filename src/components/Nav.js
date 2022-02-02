import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageContext } from "./../context/LanguageContext";
import {getMoviessAction} from "../store/actions/moviesAction"

function Nav() {
  const favoriteMovie = useSelector(state => state.favorite.movies);
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const changeLanguage = (e) => {
    setContextLang(contextLang === "ar" ? "en" : "ar")
    // window.location.reload()
    // getMoviessAction()
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink exact activeClassName='active' className='navbar-brand' to='/'>
          Movies
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                exact
                activeClassName='active'
                className='nav-link'
                aria-current='page'
                to='/favorite'
              >
                Favorite{" "}
                {favoriteMovie.length > 0 ? favoriteMovie.length : null}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                activeClassName='active'
                className='nav-link main-nav'
                to='/login'
              >
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                activeClassName='active'
                className='nav-link'
                to='/registration'
              >
                Registration
              </NavLink>
            </li>
            <li className='nav-item'>
              {/* <span
                onClick={() =>
                  setContextLang(contextLang === "ar" ? "en" : "ar")
                }
                className='nav-link'
              >
                language :{contextLang}
              </span> */}
              <button
                className='btn btn-info'
                onClick={(event) => changeLanguage(event)}
                // onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
              >
                language :{contextLang}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
