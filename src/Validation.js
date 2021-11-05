import React, { useState } from 'react';

export default function NameForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMassage, setErrorMassage] = useState('');
  const usernameRegex = /^[A-Za-z]*$/
  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

  const handleChange = e => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
      if (!usernameRegex.test(e.target.value)) {
        setErrorMassage('username harus berupa huruf')
      } else {
        setErrorMassage('')
      }
    } else {
      setPassword(e.target.value);
      if (!passwordRegex.test(e.target.value)) {
        setErrorMassage('password harus mengandung angka, huruf besar, huruf kecil')
      } else {
        setErrorMassage('')
      }
    }
  };

  const handleSubmit = e => {
    console.log('errorMassage', errorMassage)
    if (errorMassage === '') {
      alert('Submit berhasil')
      setUsername('');
      setPassword('');
      setErrorMassage('');
    } else {
      alert('Username atau Password tidak sesuai');
    }
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{margin:"10px"}}>
      <label>
        Username: <br/>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br/><br/>
      <label>
        Password: <br/>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br/>
      {errorMassage}
      <br/>
      <input type="submit" value="Submit" />
    </form>
  );
};
