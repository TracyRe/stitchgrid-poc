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
    this.state = {}
    this.handleAddNewGrid = this.handleAddNewGrid.bind(this);
  }

  handleAddNewGrid(newGrid) {
    let newGridList = Object.assign({},
    this.state.gridList);
    this.setState({gridList: newGridList})
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
          <Route exact path='/' render={() => <ThumbnailList
            gridList = {this.state.gridList}/>}/>
          <Route path='/grid' component={Grid}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
}

}


export default App;
