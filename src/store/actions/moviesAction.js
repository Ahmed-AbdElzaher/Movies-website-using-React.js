import axios from "axios";
import React, { useContext } from "react";
import { LanguageContext } from "./../../context/LanguageContext";

export const GET_MOVIES_LIST = "GET_MOVIES_LIST";

export const getMoviessAction = (contextLang) => async (dispatch) => {

  try {
        const res = await axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=8e1b1394bb09a87e5c1b050a5cebede9&language=${contextLang}`);
        dispatch({
            type: GET_MOVIES_LIST,
            payload: res.data.results,
        });
    } catch (err) {
        return console.log(err);
    }
};
