import { Timer } from "./states";

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

export type Action = StartTimersAction | StopTimersAction | ADDTimerAction;
