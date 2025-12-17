import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  ELIMINAR_TAREAS_MARCADAS,
  LIMPIAR_TAREAS,
  TOGGLE_TAREA,
} from './TaskListPageActions';

const initialState = {
  tasks: [],
};

const taskListPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_TAREA:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.newTask],
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tasks: state.tasks.filter((t, idx) => idx !== action.payload.idTask),
      };
    case TOGGLE_TAREA:
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.idTask ? { ...t, checked: !t.checked } : t
        ),
      };
    // NUEVO: dejar la lista vacía
    case LIMPIAR_TAREAS:
      return {
        ...state,
        tasks: [],
      };

    // NUEVO: eliminar sólo las tareas marcadas
    case ELIMINAR_TAREAS_MARCADAS:
      return {
        ...state,
        tasks: state.tasks.filter((t) => !t.checked),
      };
    default:
      return state;
  }
};

export default taskListPageReducer;
