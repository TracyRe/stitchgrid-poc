import React from 'react';
import Block from './Block';
import PropTypes from 'prop-types';

function Grid(props)  {
  let grid   = {};

  function newGrid() {
    props.AddNewGrid();
  }

    function renderBlock() {
      const st = 16
      const r = 20
      let gridarr = [];

      for (let j = 0; j < r; j ++) {
        for (let i = 0; i < st; i ++) {
          gridarr.push(<Block key = {[j,i]} />)
        }
      }
      return gridarr;
    }


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

    return (
      <div
        style={gridStyle}>
        {renderBlock()}
      </div>
    );
  }

Grid.propTypes = {
  grid: PropTypes.func
};

export default Grid;

// onClick={() => props.onClick(i)}
