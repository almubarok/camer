import { useQuery } from "@apollo/client";
import { QueryGetTodolist } from "../graphql/query";

export default function useGetTodo() {
  const {
    data,
    loading: loadingGet,
    error: errorGet,
  } = useQuery(QueryGetTodolist);

  return {
    todolist: data?.todolist,
    loadingGet,
    errorGet,
  };
}
