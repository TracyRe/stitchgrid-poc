import React from 'react';
import Block from './Block';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: false
    };
  }

  handleClick = (i) => {
    this.setState({ fill: !this.state.fill })
    alert('click');

  }

  render() {
    console.log(this.state);
    const gridStyle = {

      display: 'grid',
      gridTemplateColumns: 'repeat(16,1fr)',
      gridTemplateRows: 'repeat(20, 1fr)',
      gridGap: '1px 1px',
      alignItems: 'stretch',
      height: '200px',
      width: '200px',
      background: '#999',
      border: '1px solid #999',

    };

    return(
      <div>
        <h1>Hello</h1>
        <div>
          <div style={gridStyle}>
            <Block
              onClick = {(i) => this.handleClick(i)} />

          </div>
        </div>

      </div>
    );
  }
}

export default App;
