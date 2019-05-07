import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Grid from './Grid';
import Thumbnails from './Thumbnails';
import './../index.css';


function App()  {


  const divStyle = {
    padding: '0 20px'
  }

  return(
    <div style={divStyle}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Thumbnails}/>
          <Route path='/grid' component={Grid}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
