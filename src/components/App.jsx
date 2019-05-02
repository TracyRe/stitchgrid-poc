import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: false
    };
  }

  handleClick = (e) => {
    this.setState({ fill: !this.state.fill })
  }

  render() {
    return(
      <div>
        <h1>Hello</h1>
        <div>
          <style jsx>{`
              .block {
                height: 50px;
                width: 50px;
              }

              .background {
                height: 100%;
                width: 100%;
                background: #d6f0ff;
              }

              .foreground {
                height: 100%;
                width: 100%;
                background: #6b1f87;
              }
            `}
          </style>
          <div className='block'>
            <div className = {(this.state.fill) ? 'foreground' : 'background'}
              onClick = {this.handleClick}></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
