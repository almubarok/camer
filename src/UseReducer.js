import { useReducer } from 'react'

export default function Counter() {
    const initialState = {umur: 0};

    function reducer(state, action) {
    switch (action.type) {
        case 'nama':
        return {nama: action.value};
        case 'umur':
        return {umur: action.value};
        default:
        throw new Error();
    }
    }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* Count: {state.count} */}
      {/* <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button> */} 
      Nama : {state.nama}<br/>
      <input type="text" value={state.nama} onChange={(e)=>dispatch({type:"nama", value:e.target.value})}/><br/>
      Umur : {state.umur}<br/>
      <input type="text" value={state.umur} onChange={(e)=>dispatch({type:"umur", value:e.target.value})}/>
    </>
  );
}