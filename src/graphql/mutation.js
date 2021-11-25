import { gql } from "@apollo/client";

export const MutationAddTodo = gql`
  mutation MyMutation($object: todolist_insert_input!) {
    insert_todolist_one(object: $object) {
      id
      title
    }
  }
`;

export const MutationUpdateTodo = gql`
  mutation MyMutation($id: Int!, $is_done: Boolean!) {
    update_todolist_by_pk(
      pk_columns: { id: $id }
      _set: { is_done: $is_done }
    ) {
      id
      title
    }
  }
`;

export const MutatitonDeleteTodo = gql`
  mutation MyMutation($id: Int!) {
    delete_todolist_by_pk(id: $id) {
      id
      title
    }
  }
`;

export const MutationSignup = gql`
  mutation MyMutation(
    $dob: date = "12-02-2021"
    $email: String!
    $name: String!
    $password: String!
  ) {
    insert_user_one(
      object: { email: $email, name: $name, password: $password, dob: $dob }
    ) {
      id
    }
  }
`;
