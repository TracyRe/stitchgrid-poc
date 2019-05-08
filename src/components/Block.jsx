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

    return (

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
