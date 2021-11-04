import { useEffect,useState } from 'react'
import React from 'react';

// componentDidMount
// export default class componentDidMountMethod extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       name: 'Test Did Mount'
//     }
//   }
//   componentDidMount() {
//     alert("Ini akan muncul ketika component di mount")
//   }
//   render() {
//     return (
//       <div>
//        <p>{this.state.name}</p>
//       </div>
//     )
//   }
// }

// componentDidUpdate
// export default class componentDidUpdateMethod extends React.Component {
//   constructor(props){
//       super(props)
//       this.state = {
//           name: 'from previous state'
//       }
//   }

//   componentDidMount() {
//     alert("Did mount terpanggil")
//   }

//   componentDidUpdate(prevState){
//       if(prevState.name !== this.state.name){
//           alert("Did Update terpanggil")
//       }
//   }

//   changeState=()=>{
//     this.setState({name: "to current state"})
//   }

//   render() {
//       return (
//           <div>
//               State was changed {this.state.name}
//               <p id="statechange"></p>
//               <button onClick={this.changeState}>Change State Untuk trigger Did Update</button>
//           </div>
//       )
//   }
// }


// componentWillUnmount
// export default class componentWillUnmount extends React.Component {
//   constructor(props){
//       super(props)
//           this.state = {
//               show: true,
//           } 
//   }
//   render() {
//       return (
//           <>
//             <p>{this.state.show ? <Child/> : null}</p>
//              <button onClick={() => {this.setState({show: !this.state.show})}}>Click me to toggle</button>
//           </>
//       )
//   }
// }

// export class Child extends React.Component{
//   componentWillUnmount(){
//       alert('Component ini di unmount')
//   }
//   render(){
//       return(
//           <>
//           I am a child component
//           </>
//       )
//   }
// }


export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Use Effect terpanggil")
  },[]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}