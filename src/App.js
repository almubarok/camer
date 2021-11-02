import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

const navbar = [
  { link: '#home', title: 'Home' },
  { link: '#link', title: 'Link' },
  { link: '#about', title: 'About' },
];

function App() {
  // dispatch function untuk ngubah state
  const [counter, setCounter] = useState(0);
  const [sNavbar, setSNavbar] = useState(navbar);

  const handleIncrement = () => {
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    // setCounter(counter - 1);
    setCounter((prev) => prev - 1);
  };

  const handleAddHeader = () => {
    setSNavbar((prev) => [
      ...prev,
      {
        link: '#baru',
        title: 'Baru',
      },
    ]);
  };

  // jsx - js + xml

  // re render
  // lifecycle:
  // - mount/ render
  // - update
  // - unmount / pindah page

  // hook: useEffect

  // server side rendering
  // client side rendering
  // ssg static site generation
  // isr incremental static revalidate
  // next js -> level up react

  // SPA: single page application

  const styleP = {
    color: counter % 2 === 0 ? 'white' : 'green',
    border: '2px solid white',
  };

  // lifec
  return (
    <div className='App'>
      <Navbar listNavbar={sNavbar}>
        <h4>Strong</h4>
      </Navbar>
      <header className='App-header'>
        <img src='assets/image/logo192.png' className='App-logo' alt='logo' />
        <p style={styleP}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Button
          variant={counter % 2 === 0 ? 'primary' : 'danger'}
          onClick={handleDecrement}
        >
          -
        </Button>
        {counter}
        <Button
          variant={counter % 2 === 0 ? 'primary' : 'danger'}
          onClick={handleIncrement}
        >
          +
        </Button>
        <Button onClick={handleAddHeader}>Add Header</Button>
      </header>
    </div>
  );
}

export default App;
