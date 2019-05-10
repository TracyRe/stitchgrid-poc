import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Header()  {


  const divStyle = {
    paddingBottom: '10px'
  }

  return(
    <div style={divStyle}>
      <h1>DSstitchGrid</h1>
      <Link to = '/'>Home</Link> | <Link to = '/grid'>New Grid</Link>
    </div>
  );
}


export default Header;
