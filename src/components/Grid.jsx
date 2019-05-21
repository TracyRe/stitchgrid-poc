import React from 'react';
import Block from './Block';
import PropTypes from 'prop-types';

function Grid(props)  {
  console.log(props);


    // const rows = Object.keys({props.gridList.gridId}).length;

    return (
      <div className='stitchGrid' >

        {Object.keys(props.gridList).map(function(gridId){
          const grid = props.gridList[gridId];
          return <Block
            fill = {grid.fill}
            key = {grid.key}
          />;
        })}
        <style jsx='true'> {`
            .stitchGrid {
              display: grid;
              grid-template-columns: repeat(8,1fr);
              grid-template-rows: repeat(10, 1fr);
              grid-gap: 1px 1px;
              align-items: stretch;
              height: 80vw;
              width: 80vw;
              min-width: 300px;
              min-height: 300px;
              max-width: 500px;
              max-height: 500px;
              background: #999;
              border: 1px solid #999;
            }
            `}
          </style>
      </div>
    );
  }


export default Grid;
// gridlist = {props.gridList.fill}

// {renderBlock()}
