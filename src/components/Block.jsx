import React from 'react';

class Block extends React.Component {
  constructor(props) {
    super(props);
    }


  handleClick = (e) => {
    e.preventDefault();
    // alert('click');
    this.setState({ fill: !this.props.fill });
  }

  render() {
    return (

      <div className={(this.props.fill) ? 'foreground' : 'background'} onClick = {this.props.handleClick}>
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
