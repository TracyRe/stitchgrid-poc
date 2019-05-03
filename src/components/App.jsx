import React from 'react';
import Grid from './Grid';
import './../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: false
    };
  }



  render() {
    const divStyle = {
      padding: '20px'
    };
    return(
      <div style={divStyle}>
        <h1>Stitch Grid</h1>
      <Grid
        onClick = {(i) => this.handleClick(i)}/>

      </div>
    );
  }
}

export default App;
