import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { v4 } from 'uuid';
import Error404 from './Error404';
import Header from './Header';
import NewGrid from './NewGrid';
import Grid from './Grid';
import ThumbnailList from './ThumbnailList';
import './../index.css';



class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      gridList: {
      }
    }
    this.handleAddNewGridToList = this.handleAddNewGridToList.bind(this);

    this.handleEditGrid = this.handleEditGrid.bind(this);
  }

  handleAddNewGridToList(newGrid) {
    let newGridId = v4();
    let newGridList = Object.assign({},
    this.state.gridList,
      {
        [newGridId]: newGrid
      });
    this.setState({gridList: newGridList})
  }

  handleEditGrid(gridId, updatedGrid) {
    let newGridList = Object.assign({}, this.state.gridList);
    newGridList[gridId] = updatedGrid;
    this.setState({gridList: newGridList});
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
            <Route path='/newgrid' render={() => <NewGrid
              AddNewGrid = {this.handleAddNewGridToList}/>}/>
            <Route render={() => <Grid editGrid = {this.handleEditGrid}/>}/>
            <Route component={Error404}/>
          </Switch>
        </Router>
      </div>
    );
  }

}


export default App;
