import { useState } from "react"

export default function Todo(){
    const [nama,setNama] =useState("")

    const [todo, setTodo] = useState([
      {
            id:1,
            title:"Proyek 1",
            completed:true // true=>false
      },
      {
            id:2,
            title:"Proyek 2",
            completed:false
    }  
    ])

    const addTodo =()=>{
        setTodo([...todo, {
            id:todo.length+2,
            title:nama,
            completed:false
        }])
    }

    const completeTask = (e) => {
        const id = e.target.value
        const newTodo = todo.map((td)=>{
            if (td.id == id){
                td.completed = !td.completed
            }
            return td
        })
        setTodo(newTodo)
    }

    const deleteTask = (e) => {
        const id = e.target.name
        const newTodo = todo.filter((td)=>{
            if (td.id != id){
                return true
            }
            return false
        })
        setTodo(newTodo)
    }


    return (<div>
        <input type="text" value={nama} onChange={(e)=>setNama(e.target.value)}/><button onClick={addTodo}>Submit</button><br/><br/>
        {
        todo.map((todo)=>{
            return (<div>
                <input type="checkbox" defaultChecked={todo.completed} value={todo.id} onChange={completeTask}/>{todo.id}{todo.completed?<span style={{textDecoration:"line-through"}}>{todo.title}</span>:<span>{todo.title}</span>}<button name={todo.id} onClick={deleteTask}>Delete</button><br/><br/>
            </div>)
        })
        }</div>)
}