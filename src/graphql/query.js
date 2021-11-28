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

export const QueryGetTodolistByUserId = gql`
  query MyQuery($userId: Int!) {
    todolist(where: { user_id: { _eq: $userId } }) {
      id
      is_done
      title
    }
  }
`;

export const QueryGetUsers = gql`
  query GetUsers {
    user {
      id
      name
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
