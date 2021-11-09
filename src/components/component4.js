import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../stores/counter";

export default function Component4() {
  const dispatch = useDispatch();
  const listTodos = useSelector((st) => st.counter.todos);

  const handleUpdate = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <Card>
      <Card.Header>Component 4</Card.Header>
      <Card.Body>
        <Card.Text>
          {listTodos.map((v) => {
            return (
              <p
                key={v.dispatch}
                onClick={() => handleUpdate(v.id)}
                style={{ color: v.isCompleted ? "green" : "red" }}
              >
                {" "}
                {v.name}{" "}
              </p>
            );
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
