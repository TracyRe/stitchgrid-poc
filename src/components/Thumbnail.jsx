import React from 'react';
import { Link } from 'react-router-dom';


function Thumbnail(props) {
  return (
    <li><Link to = '/grid' key = {gridId}>Thumbnail</Link></li>
  );
}


  export default Thumbnail;
