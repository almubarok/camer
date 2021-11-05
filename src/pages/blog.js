import { useParams } from "react-router-dom";

export default function Blog(props){
    let params = useParams();
    return(<div>
        Ini halaman Blog {params.id}
    </div>)
}