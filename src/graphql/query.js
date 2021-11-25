import { gql } from "@apollo/client";

export const QueryGetTodolist = gql`
  query MyQuery {
    todolist {
      id
      is_done
      title
    }
  }
`;

export const QueryLogin = gql`
  query Login($email: String!, $password: String!) {
    user(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      id
      token
    }
  }
`;
