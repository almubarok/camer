import logo from './logo.svg';
import { Button, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
// import Assignment from './Assignment';
const navbar = [
  { link: '#home', title: 'Home' },
  { link: '#link', title: 'Link' },
  { link: '#about', title: 'About' },
];

function App() {
  // dispatch function untuk ngubah state
  const [counter, setCounter] = useState(0);
  const [sNavbar, setSNavbar] = useState(navbar);
  const [isDark, setIsDark] = useState(false);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    // setCounter(counter - 1);
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

  const handleSwitchDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const styleP = {
    color: counter % 2 === 0 ? 'white' : 'green',
    border: '2px solid white',
  };

  return (
    <div className='App'>
      <Navbar listNavbar={sNavbar} isDark={isDark}>
        <Form.Check
          type='switch'
          id='dark-switch'
          label='Dark'
          value={isDark}
          onChange={handleSwitchDarkMode}
        />
      </Navbar>
      <header className={isDark ? 'App-header-dark' : 'App-header-light'}>
        <img src='assets/image/logo192.png' className='App-logo' alt='logo' />
        <p>
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
