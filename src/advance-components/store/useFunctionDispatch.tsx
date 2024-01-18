import { Dispatch } from "react";
import { Action } from "../interfaces/actions";
import { Timer } from "../interfaces/states";

const useCustomDispatch = (dispatch: Dispatch<Action>) => {
  const addTimer = (data: Timer) => {
    dispatch({ type: "ADD_TIMER", payload: data });
  };
  const startTimer = () => {
    dispatch({ type: "START_TIMERS" });
  };

  const stopTimer = () => {
    dispatch({ type: "STOP_TIMERS" });
  };

  return {
    addTimer,
    startTimer,
    stopTimer,
  };
};

export default useCustomDispatch;
