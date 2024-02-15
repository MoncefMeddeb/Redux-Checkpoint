import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { setFilter } from './actions/actions';

const ListTask = ({ tasks, filter, setFilter }) => {
  const filteredTasks = filter === 'done' ? tasks.filter(task => task.isDone) : filter === 'not' ? tasks.filter(task => !task.isDone) : tasks;

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not')}>Not Done</button>
      </div>
      {filteredTasks.map(task => <Task key={task.id} task={task} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
