import { useEffect } from "react";

export default function GetApi(){

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/ditto", {method:"get"})
        .then((response)=>{
            console.log(response.json())
        }).catch((error)=>{
        })
    })

    return (
        <div>
            Tes
        </div>
    )
}