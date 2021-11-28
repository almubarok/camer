import { QueryGetTodolistByUserId } from "../graphql/query";
import { useQuery } from "@apollo/client";

export default function useTodoListByUser(userId) {
  const { data } = useQuery(QueryGetTodolistByUserId, {
    variables: { userId },
  });

  return {
    todolist: data?.todolist,
  };
}
