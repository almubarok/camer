import './App.css';
import {useQuery, gql} from "@apollo/client";


const TODOS = gql`
  query querysoal1 {
    kelas {
      guru
      id
      nama
    }
  }
`;

function App() {
  
  const { loading, error, data } = useQuery(TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (<div>
  <h2>UseQuery</h2>
  {data.kelas.map((kelas) => (
    <div key={kelas.id}>
      <span>
        {kelas.nama}
      </span>
      <span>
        {kelas.guru}
      </span>
    </div>
  ))}
  </div>)
}


export default App;
