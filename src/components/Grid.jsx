import React from 'react';
import Block from './Block';

function Grid(props) {
  console.log(props);



    const gridStyle = {

      display: 'grid',
      gridTemplateColumns: 'repeat(16,1fr)',
      gridTemplateRows: 'repeat(20, 1fr)',
      gridGap: '1px 1px',
      alignItems: 'stretch',
      height: '400px',
      width: '400px',
      background: '#999',
      border: '1px solid #999',

    };
// I think I should be able to generate the blocks with a set of loops
    function renderBlock(i) {
      const st = 16
      const r = 20
      let gridarr = [];

      for (let j = 0; j < r - 1; j ++) {
        for (let i = 0; i < st - 1; i ++) {
          return (
          gridarr.push(<Block key={i} />)
          );
        }
      }
    }
    // function renderBlock(i) {
    //
    //       return (
    //       <Block onClick={() => props.onClick(i)} />
    //       );
    //     }

    return (
      <div style={gridStyle}>
        <Block/> <Block/><Block/><Block/>
      </div>

    );
  }


export default Grid;

// onClick={() => props.onClick(i)}

// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
// <Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/><Block/>
