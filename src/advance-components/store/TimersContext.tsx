import { createContext, useContext, ReactNode, useReducer } from "react";
import { Timer, TimersState } from "../interfaces/states";
import timersReducer from "../reducer/TimersReducer";
import useCustomDispatch from "./useFunctionDispatch";

interface TimersContextValue extends TimersState {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
}
interface TimersContextProvider {
  children: ReactNode;
}
const TimersContext = createContext<TimersContextValue | null>(null);

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

export const TimersContextProvider = ({ children }: TimersContextProvider) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);
  const { startTimer, addTimer, stopTimer } = useCustomDispatch(dispatch);

  const ctx: TimersContextValue = {
    addTimer,
    startTimer,
    stopTimer,
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
