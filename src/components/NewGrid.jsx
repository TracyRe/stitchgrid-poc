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

        const gridStyle = {
          display: 'grid',
          gridTemplateColumns: 'repeat(16,1fr)',
          gridTemplateRows: 'repeat(20, 1fr)',
          gridGap: '1px 1px',
          alignItems: 'stretch',
          height: '80vw',
          width: '80vw',
          minWidth: '300px',
          minHeight: '300px',
          maxWidth: '500px',
          maxHeight: '500px',
          background: '#999',
          border: '1px solid #999',
        };

    return (
      <div>
        <form onSubmit = {addNewGridSubmit}>
          <input placeholder='rows' id='r'/>
          <input placeholder='stitches' id='st'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }


export default withRouter(NewGrid);
