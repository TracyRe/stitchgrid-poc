import React from 'react';
import {withRouter} from 'react-router-dom';
import Block from './Block';
import PropTypes from 'prop-types';

function NewGrid(props)  {


    const addNewGridSubmit = (e) => {
      e.preventDefault();
      let st = e.target.st.value;
      let r = e.target.r.value;
      let gridArr = [];
      for (let j = 0; j < r; j ++) {
        gridArr.push([]);
        for (let i = 0; i < st; i ++) {
          gridArr[j].push(<Block key = {[j,i]} fill = 'false'/>);
        }
      }
      props.AddNewGrid(gridArr);
      props.history.push('/grid');
      console.log(gridArr);
    }

    return (
      <div>
        <form onSubmit = {addNewGridSubmit}>
          <input placeholder='rows' id='r' required />
          <input placeholder='stitches' id='st' required />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }


export default withRouter(NewGrid);
