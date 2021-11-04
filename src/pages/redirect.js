import { Navigate} from "react-router-dom";


export default function Redirect(){
    alert("Halaman Redirect")
    return(<div>
        Ini halaman Redirect<br/>
        <Navigate to="/home"> Ini menggunakan Redirect ke home secara otomatis</Navigate>
    </div>)
}