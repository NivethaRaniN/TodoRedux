import React from 'react';
import addTask from './action';
import TaskList from './TaskList';

const mapStateToProps = state => ({
    tasks: state
  })
  
  const mapDispatchToProps = dispatch => ({
    addTask: () => dispatch(addTask())
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskList)