import { courseGoal } from "../App";
import CourseGoal from "./CourseGoal";

interface courseGoalList {
  goals: courseGoal[];
  handleClick: (id: number) => void;
}

const CourseGoalList = ({ goals, handleClick }: courseGoalList) => {
  return (
    <>
      <ul>
        {goals.map((goal) => (
          <CourseGoal
            key={goal.id}
            title={goal.title}
            description={goal.description}
            id={goal.id}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
