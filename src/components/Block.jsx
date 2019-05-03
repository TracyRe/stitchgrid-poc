import React from 'react';

function Block(props) {
  // function onClick() {
  //
  // }

    console.log(props);
  return (
    <div className={(props.fill) ? 'foreground' : 'background'} onClick = {props.onClick}>
      <style jsx='true'> {`
          .background  {
            height: 100%;
            width: 100%;
            background: #eee;
          }

          .foreground  {
            height: 100%;
            width: 100%;
            background: #222;
          }
        `}

    </style>
    </div>

  );
}


export default Block;


// {(props.fill) ? 'foreground' : 'background'}
// onClick = {()=> props.onClick()}
