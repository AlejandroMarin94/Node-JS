import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../pages/TaskListPages/TaskListPageActions';

const TaskFormComponent = () => {
  const [task, setTask] = useState(undefined);
  const dispatch = useDispatch();

  const taksHandler = (propValue) => {
    setTask({
      id: Date.now(),
      taskTitle: propValue,
      checked: false,
    });
  };

  const addTaskFn = () => {
    if (task) {
      dispatch(addTask(task));
      setTask(undefined);
    }
  };

  return (
    <div>
      <label>
        Nueva tarea:{' '}
        <input
          type="text"
          value={task?.taskTitle ?? ''}
          placeholder="Nueva tarea..."
          onChange={(e) => taksHandler(e.target.value)}
        />
      </label>
      <button onClick={addTaskFn}>+</button>
    </div>
  );
};

export default TaskFormComponent;
