import {useState} from 'react'

export default function UbahWarna(){
    const [color, setColor] = useState(true) // Boolean
    const [colorText, setColorText] = useState("red")

    const handleChangeColor =()=>{
        setColor(!color)
        // if(color === true){
        //     setColor(false)
        // }else{
        //     setColor(true)
        // }
    }

    const handleChangeColorText = (event) =>{
        const value = event.target.value
        setColorText(value)
    }

    return (
        <div style={{padding:"10px"}}>

            <div style={{backgroundColor:color?"red":"blue"}}>Test</div>

            <button onClick={handleChangeColor}>Change Color</button> <br/>

            <div style={{backgroundColor:colorText}}>Test</div>

            <input type="text" onChange={handleChangeColorText}/>
        </div>
    )
}