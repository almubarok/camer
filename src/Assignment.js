import Navbar from './components/Navbar';
import { useState } from 'react';
const datas = [
  { id: 1, name: 'membuat component', completed: false },
  { id: 2, name: 'membuat css', completed: true },
  { id: 3, name: 'handle click', completed: false },
  { id: 4, name: 'buat design', completed: false },
];

export default function Assignment() {
  const [todos, setTodos] = useState(datas);

  const handleComplete = (id) => {
    console.log(id);
    const tmp = [...todos];

    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].id === id) {
        tmp[i].completed = !tmp[i].completed;
      }
    }
    setTodos(tmp);
  };

  return (
    <div>
      <Navbar />

      {todos.map((data) => {
        return (
          <div
            key={data.id}
            className={`todo ${data.completed ? 'complete' : ''}`}
            onClick={() => handleComplete(data.id)}
          >
            {data.name}
          </div>
        );
      })}
    </div>
  );
}
