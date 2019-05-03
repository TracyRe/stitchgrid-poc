import React from 'react';
import Block from './Block';

function Grid(props) {

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

    return (

      <div style={gridStyle}>
      <Block />

      </div>

    );
  }


export default Grid;
