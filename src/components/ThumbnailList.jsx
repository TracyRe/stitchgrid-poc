import React from 'react';
import Thumbnail from './Thumbnail';

function Thumbnails(props) {
  return (
    <div>
      <ul>
        {Object.keys(props.gridList).map(function(gridId) {
          var grid = props.gridList[gridId];
          return <Thumbnail
            key = {gridId} />
        })}
      </ul>
    </div>

  );
}


  export default Thumbnails;
