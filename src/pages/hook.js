import { useNavigate} from "react-router-dom";


export default function Hook(){
    const navigate = useNavigate();

    navigate('success');
    return(<div>
        Ini halaman hook<br/>
        Panjang history {navigate.length}
        {navigate('success')}
    </div>)
}