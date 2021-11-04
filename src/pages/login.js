
import { Link} from "react-router-dom";

export default function Login(){
    return(<div>
        Ini halaman Login<br/>
        Username : <input type="text"/><br/>
        Password : <input type="text"/><br/>
        <Link to="/home">Menuju Home</Link><br/>
    </div>)
}