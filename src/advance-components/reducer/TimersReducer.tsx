import { Action } from "../interfaces/actions";
import { TimersState } from "../interfaces/states";

const timersReducer = (state: TimersState, action: Action): TimersState => {
  switch (action.type) {
    case "START_TIMERS":
      return {
        ...state,
        isRunning: true,
      };
    case "STOP_TIMERS":
      return {
        ...state,
        isRunning: false,
      };
    case "ADD_TIMER":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };

    default:
      break;
  }

  return state;
};

export default timersReducer;
