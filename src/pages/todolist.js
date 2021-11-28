import { useParams } from "react-router-dom";
import useTodoListByUser from "hooks/useGetTodoByUser";

export default function Todolist() {
  const { userId } = useParams();

  const { todolist } = useTodoListByUser(userId);

  return (
    <>
      {todolist?.map((v) => {
        return <p key={v.id}>{v.title}</p>;
      })}
    </>
  );
}
