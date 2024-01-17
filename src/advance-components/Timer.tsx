import { useEffect, useRef, useState } from "react";
import Container from "./components/Container";
import { Timer as TimerProps, useTimersContext } from "./store/TimersContext";

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = +setInterval(() => {
        setRemainingTime((prevState) => {
          if (remainingTime <= 0) {
            return prevState;
          }

          return prevState - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress
          max={duration * 1000}
          value={remainingTime}
        />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
