import {useState} from 'react'

export default function Form(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (e) => {
        console.log("isi event.target", e.target)
        const {value} = e.target

        setUsername(value)
    }

    const handlePassword = (e) => {
        const {value} = e.target
        setPassword(value)
    }

    const handleSubmit =()=>{
        alert("Form telah disubmit")
    }

    return <div>
        <form onSubmit={handleSubmit}>
            Username : <input name="username" value={username} type="text" onChange={handleName}/> State username=> {username} <br/><br/>
            Password : <input name="password" value={password} type="text" onChange={(e)=>setPassword(e.target.value)}/> State password=> {password} <br/><br/>
            <input type="submit" value="Login"/>
        </form>
    </div>
}


// Form Select

// export default function FormSelect(){
//     const [selection, setSelection] = useState("")

//     const handleSelection = (e) => {
//         console.log("isi event.target", e.target)
//         const {value} = e.target

//         setSelection(value)
//     }

//     const handleSubmit =(e)=>{
//         alert("Form telah disubmit")
//         e.preventDefault();
//     }

//     return <div>
//         <form onSubmit={handleSubmit}>
//             <label>
//             Pick your favorite flavor:
//             <select value={selection} onChange={handleSelection}>
//                 <option value="grapefruit">Grapefruit</option>
//                 <option value="lime">Lime</option>
//                 <option value="coconut">Coconut</option>
//                 <option value="mango">Mango</option>
//             </select>
//             </label>
//             <span> State Selection => {selection}</span>
//             <br/>
//             <input type="submit" value="Submit" />
//         </form>
//     </div>
// }