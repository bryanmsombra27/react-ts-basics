import Container from "./components/Container";
import { Timer as TimerProps } from "./store/TimersContext";

export default function Timer({ name, duration }: TimerProps) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
