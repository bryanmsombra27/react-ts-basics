import { FormEvent, LegacyRef, RefObject, useRef } from "react";

interface NewGoalsProps {
  addGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ addGoal }: NewGoalsProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    addGoal(enteredGoal, enteredSummary);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input
          type="text"
          id="goal"
          ref={goalRef}
        />
      </p>
      <p>
        <label htmlFor="summary">short summary</label>
        <input
          type="text"
          id="summary"
          ref={summaryRef}
        />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
