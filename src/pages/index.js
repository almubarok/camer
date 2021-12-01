import { gql, useQuery } from "@apollo/client";
import { parseCookies } from "nookies";

export const QueryGetTodolist = gql`
  query MyQuery {
    todolist {
      id
      title
    }
  }
`;

export default function Index() {
  const { data } = useQuery(QueryGetTodolist);
  const cookie = parseCookies();
  const isLoggedIn = cookie["userId"];

  return (
    <div>
      {isLoggedIn ? <p>Ini kalau sudah login</p> : <p>Ini belum login</p>}
      {data?.todolist.map((v) => {
        return <p key={v.id}>{v.title}</p>;
      })}
    </div>
  );
}
