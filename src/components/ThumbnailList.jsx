import React from 'react';
import Thumbnail from './Thumbnail';

function ThumbnailList(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {Object.keys(props.gridList).map(function(gridId) {
          const grid = props.gridList[gridId];
          return <Thumbnail
            key = {gridId}
            gridId = {gridId}
            />
        })}
      </ul>
    </div>

  );
}


  export default ThumbnailList;
