import React from 'react';

class Block extends React.Component {
  constructor(props) {
    super(props);
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    // alert('click');
    this.setState({ fill: !props.fill });
  }

  render() {
    return (

      <div className={(props.fill) ? 'foreground' : 'background'} onClick = {props.handleClick}>
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
