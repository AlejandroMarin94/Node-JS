export const AGREGAR_TAREA = 'AGREGAR_TAREA';
export const ELIMINAR_TAREA = 'ELIMINAR_TAREA';
export const TOGGLE_TAREA = 'TOGGLE_TAREA';

export const addTask = (newTask) => {
  return {
    type: AGREGAR_TAREA,
    payload: {
      newTask,
    },
  };
};

export const delTask = (idTask) => {
  return {
    type: ELIMINAR_TAREA,
    payload: {
      idTask,
    },
  };
};

export const toggleTask = (idTask) => {
  return {
    type: TOGGLE_TAREA,
    payload: {
      idTask,
    },
  };
};
