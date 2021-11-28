import useGetUsers from "hooks/useGetUsers";
import { Link } from "react-router-dom";

export default function Index() {
  const { users } = useGetUsers();

  return (
    <div>
      {users?.map((v) => {
        return (
          <p key={v.id}>
            <Link to={`todolist/${v.id}`}>{v.name}</Link>
          </p>
        );
      })}
    </div>
  );
}
