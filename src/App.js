import logo from './logo.svg';
import { Button, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import UseUppercase from './hooks/useUppercase';
// import Assignment from './Assignment';
import Pokemon from './Pokemon';

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
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const upper = UseUppercase(name);

  // 1 semua kondisi
  useEffect(() => {
    console.log('useEffect');
  });

  // 2 mount, get data
  useEffect(() => {
    console.log('when mount');
  }, []);

  // 3 ada update di state counter
  useEffect(() => {
    console.log('when counter update');
    if (counter === 5) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [counter]);

  // 4 unmount
  useEffect(() => {
    return () => console.log('unmount');
  }, [counter]);

  // mount -> halaman pertama kali di render
  // update -> rerender / ada update state
  // unmount -> halaman di destroy

  // react < 16.8 class based
  // react => 16.8 function based + hook

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleAddHeader = (e) => {
    e.preventDefault();
    setSNavbar((prev) => [
      ...prev,
      {
        link: `#${name}`,
        title: name,
      },
    ]);
    setName('');
    console.log('header added');
  };

  const handleSwitchDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const handleChangeInputName = (e) => {
    console.log(e.target.value);
    let re = new RegExp('[0-9]');
    if (re.test(e.target.value)) {
      setError('Tidak boleh angka');
    } else {
      setError('');
    }
    setName(e.target.value);
  };

  const styleP = {
    color: counter % 2 === 0 ? 'white' : 'green',
    border: '2px solid white',
  };

  return (
    <Pokemon />
    // <div className='App'>
    //   <Navbar listNavbar={sNavbar} isDark={isDark}>
    //     <Form.Check
    //       type='switch'
    //       id='dark-switch'
    //       label='Dark'
    //       value={isDark}
    //       onChange={handleSwitchDarkMode}
    //     />
    //   </Navbar>
    //   <header className={isDark ? 'App-header-dark' : 'App-header-light'}>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //     <Button
    //       variant={counter % 2 === 0 ? 'primary' : 'danger'}
    //       onClick={handleDecrement}
    //     >
    //       -
    //     </Button>
    //     {counter} <br />
    //     {upper}
    //     <Button
    //       variant={counter % 2 === 0 ? 'primary' : 'danger'}
    //       onClick={handleIncrement}
    //     >
    //       +
    //     </Button>
    //     <form onSubmit={handleAddHeader}>
    //       <input
    //         placeholder='name'
    //         value={name}
    //         onChange={handleChangeInputName}
    //       />
    //       <Button type='submit'>Add Header</Button>
    //     </form>
    //     {error}
    //   </header>
    // </div>
  );
}

export default App;
