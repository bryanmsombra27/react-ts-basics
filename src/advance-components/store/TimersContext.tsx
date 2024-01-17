import { createContext, useContext, ReactNode, useReducer } from "react";

export interface Timer {
  name: string;
  duration: number;
}

interface TimersState {
  isRunning: boolean;
  timers: Timer[];
}

interface TimersContextValue extends TimersState {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
}
interface TimersContextProvider {
  children: ReactNode;
}

type StartTimersAction = {
  type: "START_TIMERS";
};
interface StopTimersAction {
  type: "STOP_TIMERS";
}
interface ADDTimerAction {
  type: "ADD_TIMER";
  payload: Timer;
}

type Action = StartTimersAction | StopTimersAction | ADDTimerAction;

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};
const TimersContext = createContext<TimersContextValue | null>(null);

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

export const TimersContextProvider = ({ children }: TimersContextProvider) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    addTimer: (data) => {
      dispatch({ type: "ADD_TIMER", payload: data });
    },
    startTimer: () => {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimer: () => {
      dispatch({ type: "STOP_TIMERS" });
    },
    isRunning: timersState.isRunning,
    timers: timersState.timers,
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};
export const useTimersContext = () => {
  const context = useContext(TimersContext);

  if (context === null) {
    throw new Error("context was used outside of the provider");
  }

  return context;
};
