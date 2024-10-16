import React from 'react'
import './Todo.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from 'react'
import { IoMdDoneAll } from "react-icons/io";
const Todo = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {

    setTodos([...todos, {list : todo,id:Date.now()}])
    console.log(todos);
    setTodo('')

  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

const onDelete =(id)=>{
   setTodos( todos.filter((to)=>to.id !==id))
}



  return (
    <div className='container'>
      <h2>TODDO APP</h2>
      <form className='form-group' onSubmit={handleSubmit}>
        <input value={todo} type="text" onChange={(event) => setTodo(event.target.value)} placeholder='Enter you todo' className='form-control' />
        <button onClick={addTodo}>ADD</button>
      </form>
      <div className='list'>
        <ul>
          {
            todos.map((to) => (
              <li className='list-items'>
                <div className="list-item-list">{to.list}</div>
                <span>
                  <MdEdit className='list-item-icons' id='edit' title='Edit' />
                  <MdDelete className='list-item-icons' id='delete' title='Delete' onClick={()=>onDelete(to.id)} />
                  <IoMdDoneAll className='list-item-icons' id='complete' title='Complete' />

                </span>
              </li>
            )





            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Todo