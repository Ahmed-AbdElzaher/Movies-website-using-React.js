import React, { useState } from "react";
import "./App.css";
import "../src/components/Nav";
import Nav from "./components/Nav";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import MovieDetails from './Pages/MovieDetails';
import { LanguageContext } from './context/LanguageContext';
import { useSelector } from "react-redux";


function App() {
  const language = useSelector((state) => state.language.app_language);
  const [ contextLang , setContextLang ] = useState('en')

  console.log(language)
  return (
    <>
      <LanguageContext.Provider value={{contextLang , setContextLang}}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/favorite" exact component={Favorite} />
          <Route path="/moviedetails/:id" exact component={MovieDetails} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
