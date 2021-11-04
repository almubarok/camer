import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";


export default function Index(){
    let [angka,setAngka]= useState(1)
    let navigate = useNavigate();

    const handleSubmit =()=>{
        // setAngka(2)
        alert("Line ini jalan dulu")
        navigate("/contacts")
    }
    return(<div>
        <h1>{angka}</h1>
        Ini halaman Home<br/>
        <Link to="/contacts">Menuju contacts</Link><br/>
        <a href="/contacts">Menuju contact href</a><br/>
        <button onClick={handleSubmit}>Menuju Blog 1</button>
    </div>)
}