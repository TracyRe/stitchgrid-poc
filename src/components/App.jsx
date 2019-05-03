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

  handleClick = (i) => {
    this.setState({ fill: !this.state.fill })
    // alert('click');

  }

  render() {
    return(
      <div>
        <h1>Stitch Grid</h1>
      <Grid/>

      </div>
    );
  }
}

export default App;
