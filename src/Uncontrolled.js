import {useRef} from 'react'

// export default function Form(){
//     const username = useRef("")
//     const password = useRef("")
//     const umur = useRef("")
//     const jeniskelamin = useRef("")

//     const handleSubmit =()=>{
//         alert("Form telah disubmit")
//         console.log("Submit Uncontrolled Input")
//         console.log("Nilai username", username.current.value)
//         console.log("Nilai password", password.current.value)
//     }

//     return <div>
//         <form onSubmit={handleSubmit}>
//             Username : <input name="username" defaultValue="masukkan username" ref={username}/><br/><br/>
//             Password : <input name="password" ref={password}/><br/><br/>
//             Username : <input name="umur" ref={username}/><br/><br/>
//             Password : <input name="jeniskelamin" ref={password}/><br/><br/>
//             {/* Pekerjaan : <input name="password" placeholder="tulis pekerjaan"/><br/><br/>
//             Status : <input name="password" defaultValue="Ini default Value"/><br/><br/> */}

//             <input type="submit" value="Login"/>
//         </form>
//     </div>
// }

export default function File(){
    const file = useRef("")

    const handleSubmit =()=>{
        alert("Form telah disubmit")
        console.log("Submit Uncontrolled Input")
        console.log("Value file", file.current.files[0].name)
        console.log("Value file", file.current.files[1].name)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            Input File : <input type="file" ref={file} multiple/> <br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
}