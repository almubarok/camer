import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [umur,setUmur] =useState(0)

  const [username, setUsername] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" role="image" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="testing"
        >
          Learn React
        </a>
        <input type="text" placeholder="Username" aria-label="testing" defaultValue="" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <div>
          Ini text buat test
        </div>
        <input type="text" aria-label="umur" defaultValue={0} value={umur} />

        <button onClick={()=>setUmur(umur+1)} aria-label="tambahUmur">Tambah Umur</button>
      </header>
    </div>
  );
}

export default App;
