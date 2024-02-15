import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions/actions';

const AddTask = ({ dispatch }) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim() !== '') {
      dispatch(addTask(description));
      setDescription('');
    }
  };

  return (
    <div>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default connect()(AddTask);
