import React from 'react';

function Block(props) {
  // function onClick() {
  //
  // }
  console.log(props);


  return (
    // I don't understand how 'background' (the falsy value) is getting passed to className if state = false for 'fill' is not being passed down from App
    <div className={(props.fill) ? 'foreground' : 'background'} onClick = {props.onClick}>
      <style jsx='true'> {`
          .foreground  {
            height: 100%;
            width: 100%;
            background: #222;
          }
          .background  {
            height: 100%;
            width: 100%;
            background: #fefefe;
          }
        `}

    </style>
    </div>

  );
}


export default Block;
