export const AGREGAR_TAREA = 'AGREGAR_TAREA';
export const ELIMINAR_TAREA = 'ELIMINAR_TAREA';
export const TOGGLE_TAREA = 'TOGGLE_TAREA';

// NUEVAS ACTIONS
export const LIMPIAR_TAREAS = 'LIMPIAR_TAREAS';
export const ELIMINAR_TAREAS_MARCADAS = 'ELIMINAR_TAREAS_MARCADAS';

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

// Deja la lista de tareas vacía
export const clearTasks = () => ({
  type: LIMPIAR_TAREAS,
  payload: {},
});

// Elimina sólo las tareas marcadas como completadas
export const removeMarkedTasks = () => ({
  type: ELIMINAR_TAREAS_MARCADAS,
  payload: {},
});
