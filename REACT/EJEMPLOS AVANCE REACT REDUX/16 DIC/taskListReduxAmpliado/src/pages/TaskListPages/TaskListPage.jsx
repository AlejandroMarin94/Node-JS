import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearTasks,
  delTask,
  removeMarkedTasks,
  toggleTask,
} from './TaskListPageActions';

const TaskListPage = () => {
  const tasks = useSelector((state) => state.taskListPageReducer.tasks);
  const dispatch = useDispatch();

  return (
    <>
      {!tasks || tasks.length === 0 ? (
        <h3>Aún no se han introducido tareas</h3>
      ) : (
        <>
          {tasks.map((t, idx) => (
            <div key={idx}>
              <span style={{ fontWeight: 'bold' }}>{t?.taskTitle}</span> |
              Completada:
              <input
                type="checkbox"
                checked={t?.checked}
                onChange={() => dispatch(toggleTask(t.id))}
              />
              <button onClick={() => dispatch(delTask(idx))}>
                Eliminar tarea
              </button>
            </div>
          ))}
          {/* NUEVOS BOTONES PARA LAS NUEVAS FUNCIONALIDADES */}
          <button onClick={() => dispatch(clearTasks())}>
            Borrar todas las tareas
          </button>
          <button onClick={() => dispatch(removeMarkedTasks())}>
            Borrar tareas completadas
          </button>
        </>
      )}
    </>
  );
};

export default TaskListPage;
