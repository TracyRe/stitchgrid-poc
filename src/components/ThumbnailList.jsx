import React from 'react';
import Thumbnail from './Thumbnail';

function ThumbnailList(props) {
  return (
    <div>
      <ul>
        {Object.keys(props.gridList).map(function( ) {
          const grid = props.gridList;
          return <Thumbnail/>
        })}
      </ul>
    </div>

  );
}


  export default ThumbnailList;
