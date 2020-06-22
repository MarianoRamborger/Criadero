import React from 'react';
import './App.css'

// import LeftBody from './Components/LeftBody/Leftbody'
import PicturesBody from './Components/LeftBody/PicturesBody'
import NewsBody from './Components/LeftBody/newsBody'
import RightColumn from './Components/RightColumn/RightColumn'
import Header from './Components/Header/Header'
import Title from './Components/Accordion/Title'
import Accordion from './Components/Accordion/Accordion'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";



export const App = () => {
 
return (
 
  <Router>



    <Switch>


          <Route exact path="/">
            <Title />
           <Accordion />
          </Route>

         
          <Route exact path="/novedades">

              <Header/>

              <div id="row-of-columns">
              <NewsBody />

              <RightColumn />
              </div>
          </Route>

          <Route exact path="/fotos">

            <Header/>

            <div id="row-of-columns">
            <PicturesBody />

            <RightColumn />
            </div>
          </Route>







         
        

    </Switch>
 
  </Router>




)}


export default App