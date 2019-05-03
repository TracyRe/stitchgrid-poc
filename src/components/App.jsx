import React from 'react';
import Grid from './Grid';
import './../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   //This isn't doing anything. I need it to do something
      fill: false
    };
  }

  handleClick = (i) => {
    this.setState({ fill: !this.state.fill })
    alert('click');

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
