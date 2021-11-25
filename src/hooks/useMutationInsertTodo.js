import { useMutation } from "@apollo/client";
import { QueryGetTodolist } from "../graphql/query";
import { MutationAddTodo } from "../graphql/mutation";

export default function useMutationInsertTodo() {
  const [addTodo, { loading: loadingAdd, errorAdd }] = useMutation(
    MutationAddTodo,
    { refetchQueries: [QueryGetTodolist] }
  );

  return {
    addTodo,
    loadingAdd,
    errorAdd,
  };
}
