import { useParams } from "react-router-dom";


export default function Contacts(props){
    let params =useParams()
    return(<div>
        Ini halaman Contacts {params.id}
        {props.children}
    </div>)
}