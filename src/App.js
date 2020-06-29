import React from 'react';
import './App.css'

// import LeftBody from './Components/LeftBody/Leftbody'
import Header from './Components/Header/Header'
import Title from './Components/Accordion/Title'
import Accordion from './Components/Accordion/Accordion'
import PicturesBody from './Components/LeftBody/PicturesBody'
import NewsBody from './Components/LeftBody/newsBody'
import NosotrosBody from './Components/LeftBody/NosotrosBody'
import ContactoBody from './Components/LeftBody/ContactoBody'
import RightColumn from './Components/RightColumn/RightColumn'
import NotFound from './Components/LeftBody/NotFound'
// import Gorriones from './Components/Intro/Intro'




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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


          <Route exact path="/home">
          <Redirect to='/' />
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

          <Route exact path="/nosotros">
           <Header/>

              <div id="row-of-columns">
              <NosotrosBody />

              <RightColumn />
              </div>

          </Route>

          <Route exact path="/contacto">
           <Header/>

              <div id="row-of-columns">
              <ContactoBody />

              <RightColumn />
              </div>

          </Route>


         <Route>

               <Header/>

              <div id="row-of-columns">
              <NotFound />

              <RightColumn />
              </div>

         </Route>
    
        

    </Switch>
 
  </Router>




)}


export default App