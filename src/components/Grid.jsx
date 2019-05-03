import React from 'react';
import Block from './Block';

function Grid(props) {
  console.log(props)

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

    function renderBlock(i) {
      return (
      <Block  />
      );
    }

    return (

      <div style={gridStyle}>
        {renderBlock(0)}
        {renderBlock(1)}
        {renderBlock(2)}
        {renderBlock(3)}
        {renderBlock(4)}

      </div>

    );
  }


export default Grid;
