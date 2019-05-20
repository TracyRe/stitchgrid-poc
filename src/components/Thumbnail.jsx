import React from 'react';
import { Link } from 'react-router-dom';


function Thumbnail(props) {
  console.log(props);
  let {gridId} = props;

  return (
    <li><Link to = '/grid'>{gridId}</Link></li>
  );
}


  export default Thumbnail;

   // key = {gridId}
