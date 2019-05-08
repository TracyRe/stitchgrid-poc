import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Grid from './Grid';
import ThumbnailList from './ThumbnailList';
import './../index.css';



class App extends React.Component  {
  constructor(props) {
    super(props);
  }

render() {
  const divStyle = {
    padding: '0 20px'
  }

  return(
    <div style={divStyle}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={ThumbnailList}/>
          <Route path='/grid' component={Grid}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
}

}


export default App;
