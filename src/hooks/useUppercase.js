import { useState, useEffect } from 'react';

export default function UseUppercase(letter) {
  // const [upper, setUpper] = useState(letter.toUpperCase());

  // useEffect(() => {
  //   setUpper(letter.toUpperCase());
  // }, [letter]);

  return letter.toUpperCase();
}
