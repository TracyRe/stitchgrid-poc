import React from 'react';
import Block from './Block';
import PropTypes from 'prop-types';

function Grid(props)  {


    return (
      <div className='stitchGrid' >

        {Object.keys(props.gridList).map(function(gridId,j){
          console.log(props.gridList[gridId][j]);
          console.log('length of st array ' + props.gridList[gridId][j].length);
          console.log('length of r array ' + props.gridList[gridId].length);
          const st = props.gridList[gridId][j].length;
          const r = props.gridList[gridId].length;
          {Object.keys([gridId][j]).map(function(i,key){
            console.log(props.gridList[gridId][j][i]);
            let block = props.gridList[gridId][j][i];
            return <Block
              fill = {block.fill}
              key = {key}
            />
          })}
        })}
        <style jsx='true'> {`
          .stitchGrid {
            display: grid;
            grid-template-columns: repeat( 8,1fr);
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
