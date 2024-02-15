import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask } from './actions/actions';

const Task = ({ task, dispatch }) => {
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTask(task.id, editedDescription));
    setIsEditing(false);
  };

  const handleToggleDone = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div>
      {isEditing ? (
        <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
      ) : (
        <>
          <span>{task.id}</span>
          <span>{task.description}</span>
          <input type="checkbox" checked={task.isDone} onChange={handleToggleDone} />
        </>
      )}
      <button onClick={isEditing ? handleSaveEdit : handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default connect()(Task);
