import useGetUsers from "hooks/useGetUsers";
import { useNavigate, Link } from "react-router-dom";

export default function Index() {
  const { users } = useGetUsers();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/todolist/" + id);
  };
  return (
    <div>
      {users?.map((v) => {
        return (
          <>
            {/* pakai onClick bisa */}
            <p key={v.id} onClick={() => handleClick(v.id)}>
              {v.name}
            </p>

            {/* pakai Link bisa */}
            <p key={v.id}>
              <Link to={`todolist/${v.id}`}>{v.name}</Link>
            </p>
          </>
        );
      })}
    </div>
  );
}
