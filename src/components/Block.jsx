import React from 'react';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fill: false };
  }


  handleClick = (e) => {
    e.preventDefault();
    // alert('click');
    this.setState({ fill: !this.state.fill });
  }

  render() {
    const blockStyle = {
      background: '#fefefe'
    }

    return (
      // I don't understand how 'background' (the falsy value) is getting passed to className if state = false for 'fill' is not being passed down from App
      <div className={(this.state.fill) ? 'foreground' : 'background'} onClick = {this.handleClick}>
        <style jsx='true'> {`
            .foreground  {
              background: #222;
            }
            .background  {
              background: #fefefe;
            }
            `}
          </style></div>
        );
      }
  }


export default Block;

// style={blockStyle}
