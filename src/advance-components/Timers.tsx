import Timer from "./Timer";
import { useTimersContext } from "./store/TimersContext";

export default function Timers() {
  const { timers } = useTimersContext();

  return (
    <ul>
      {timers.map((timer) => (
        <Timer
          key={timer.duration}
          name={timer.name}
          duration={timer.duration}
        />
      ))}
    </ul>
  );
}
