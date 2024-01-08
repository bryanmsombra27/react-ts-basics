import { ReactNode } from "react";
import { courseGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface courseGoalList {
  goals: courseGoal[];
  handleClick: (id: number) => void;
}

const CourseGoalList = ({ goals, handleClick }: courseGoalList) => {
  let warningBox: ReactNode;

  if (goals.length === 0)
    return (
      <InfoBox mode="hint">You have no course yet. Start adding some!</InfoBox>
    );

  if (goals.length >= 4)
    warningBox = (
      <InfoBox
        mode="warning"
        severity="medium"
      >
        Your collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );

  return (
    <>
      {warningBox}
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
