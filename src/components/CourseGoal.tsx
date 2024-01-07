import { type ReactNode, type PropsWithChildren, type FC } from "react";

interface CourseGoalsProps {
  title: string;
  description: string;
  id: number;
  handleClick: (id: number) => void;
  // children?: ReactNode; // EL TIPO PARA LA PROPIEDAD CHILDREN
}
//otra forma de tipar los parametros recibidos del componente
// type courseGoals = PropsWithChildren<{ title: string; description: string }>;

//FORMA CONVENCIONAL DE TIPAR COMPONENTES EN REACT
// const CourseGoal = ({ description, title, children }: CourseGoalsProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

///OTRA FORMA DE TIPAR UN COMPONENTE EN REACT
const CourseGoal: FC<CourseGoalsProps> = ({
  description,
  title,
  id,
  handleClick,
}) => {
  return (
    <article>
      <div>
        <h2>
          {title} - {id.toFixed(4)}
        </h2>
        <p>{description}</p>
      </div>
      <button onClick={() => handleClick(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
