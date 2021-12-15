import { useEffect, useState } from "react";
import axios from 'axios'


// Menggunakan fetch
// export default function GetApi(){

//     useEffect(() => {

//         const getPokemon =  async () => {
//           const response =  await fetch('https://pokeapi.co/api/v2/pokemon/ditto'); // Fungsi asynchronous, by default dia akan di skip prosesnya,
//           const res =  await response.json();
//           console.log("ini hasil dari api",res)
//         };

//         getPokemon();
//     });

//     return (
//         <div>
//             Tes
//         </div>
//     )
// }

// export default function GetApi(){

//     useEffect(() => {
//         const getPokemon = async () => {
//             const response = await axios(
//               'https://pokeapi.co/api/v2/berry/1'
//             );
//             const res = await response.data;
//             console.log("ini fetch dari axios",res)
//           };
//           getPokemon();
//     });

//     return (
//         <div>
//             Tes
//         </div>
//     )
// }

// export default function GetApi(){

//     useEffect(() => {
//         axios.get('https://pokeapi.co/api/v2/ber')
//         .then((response)=> {
//             console.log("Response axios promise",response.data);
//         })
//         .catch((error)=> {
//             console.log("Ini error catch", error);
//         })
//     });

//     return (
//         <div>
//             Tes
//         </div>
//     )
// }

export default function GetApi(){
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => { 
    });

    const handleLogin = (event)=>{
        event.preventDefault();
        const postLogin = async () => {
            const response = await axios(
                {
                    method: 'post',
                    url: 'http://34.72.170.242:8080/users/login',
                    headers: {}, 
                    data: {
                        "username":username,
                        "password":password
                    }
                }
            );
            // const res = response.data;
            if(response.data.token){
                setToken(response.data.token)
            }else{
                setToken("")
            }
        };
        postLogin();
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                Username : <input type="text" onChange={(e)=>setusername(e.target.value)}/><br/>
                Password : <input type="text" onChange={(e)=>setpassword(e.target.value)}/><br/>
                <input type="submit" value="Login"/>
            </form>
            {token?token:<span>Login Gagal</span>}
        </div>
    )
}