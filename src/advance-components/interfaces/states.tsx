export interface Timer {
  name: string;
  duration: number;
}

export interface TimersState {
  isRunning: boolean;
  timers: Timer[];
}
