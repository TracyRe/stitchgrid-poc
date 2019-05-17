import React from 'react';
import {withRouter} from 'react-router-dom';
import Block from './Block';
import PropTypes from 'prop-types';

function NewGrid(props)  {
  let grid   = {};

  // function newGrid() {
  //   props.AddNewGrid();
  // }

    const renderBlock = (e) => {
      e.preventDefault();
      let st = e.target.st.value;
      let r = e.target.r.value;
      let gridarr = [];
      let masterArr = [];
      for (let j = 0; j < r; j ++) {
        masterArr.push([]);
        for (let i = 0; i < st; i ++) {
          masterArr[j].push('false');
        }
      }
      props.AddNewGrid(masterArr);
    }

    // props.history.push('/');

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
      <div>
        <form onSubmit = {renderBlock}>
          <input placeholder='rows' id='r'/>
          <input placeholder='stitches' id='st'/>
          <button type='submit'>Submit</button>
        </form>


      </div>
    );
  }

NewGrid.propTypes = {
  grid: PropTypes.func
};

export default withRouter(NewGrid);
