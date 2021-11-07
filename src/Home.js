import React from 'react'
import {useState} from 'react'


// Perbedaan react component class, function, statefull & stateless

export default function Home(){
    const [state, setState ] = useState(10)

    const hallo = () => {
        alert("Hallo")
    }

    const handleSetState = () =>{
        setState(state+1)
    }

    return (
        <div>
            Ini adalah state {state} <br/>
            
            {/* onclick, onchange form, onSubmit,  */}

            {/* <button onClick={()=>setState(state+1)}>+</button> */}
            <button onClick={handleSetState}>+</button>
        </div>
    )
}

// Kalau kita butuh component yang pake state kita haurs bikin component pake class => Statefull Component => react < 16
// export default class Home extends React.Component {
//     constructor() {
//         super();
//         this.state = {angka: 10};
//     }

//     handleSetState = () => {
//         this.setState({angka: this.state.angka + 1});
//       }

//     render() {
//         return (
//         <div>
//             Ini adalah state {this.state.angka}<br/>
//             <button type="button" onClick={this.handleSetState}>+</button>
//         </div>)
//     }
// }

// Klo ga butuh state kita cukup bikin component pake function => Stateless Component
// export default function Home() {
//     return (
//     <div>
//         Ini adalah state <br/>
//     </div>)
// }