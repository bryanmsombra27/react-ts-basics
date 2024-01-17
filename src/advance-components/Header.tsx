import Button from "./components/Button";
import { useTimersContext } from "./store/TimersContext";

export default function Header() {
  const { isRunning, stopTimer, startTimer } = useTimersContext();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={isRunning ? stopTimer : startTimer}>
        {isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
