import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export interface courseGoal {
  title: string;
  description: string;
  id: number;
}

function App() {
  //forma de tipar un useState
  const [goals, setGoals] = useState<courseGoal[]>([]);
  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevState) => {
      return [
        ...prevState,
        {
          description: summary,
          title: goal,
          id: Math.random(),
        },
      ];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((state) => {
      const newState = state.filter((item) => item.id !== id);
      return [...newState];
    });
  };

  return (
    <>
      <main>
        <Header image={{ src: goalsImage, alt: "a list of goals" }}>
          <h1>Your course goals</h1>
        </Header>

        <NewGoal addGoal={handleAddGoal} />
        <CourseGoalList
          goals={goals}
          handleClick={handleDeleteGoal}
        />
      </main>
    </>
  );
}

export default App;
