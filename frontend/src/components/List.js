import React, {Fragment, useEffect, useState} from 'react';
import Edit from './Edit';

export default function List() {

  //Fetching live todo list from backend REST api
  const [todos, setTodos] = useState([]);
  const getTodos = async() =>{
    try {
        
        const response = await fetch("http://localhost:4000/todos");
        const jsonData = await response.json();
        setTodos(jsonData);
        
    } catch (err) {
        console.error(err.message);
    }
  }

  //Deleting todo item with backend REST api
  const deleteTodo = async(tid) =>{
    try {
      
      const response = await fetch(`http://localhost:4000/todos/${tid}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo)=>{
        return todo.tid !== tid;
      }))

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(()=>{
    getTodos();
  }, [] );

  return (
    <div>
      <Fragment>
      <h1 className='text-center mt-5 mb-5'>List is displayed here</h1>

      <div class="container">           
        <table class="table table-dark table-striped">
        <thead>
        <tr>
        <th></th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody>
            {todos.map(todo =>{
                return (
                    <tr key={todo.tid}>
                    <td>Check</td>
                    <td>{todo.description}</td>
                    <td><Edit todo={todo}/></td>
                    <td><button className='roundDeleteBtn' onClick={()=>{deleteTodo(todo.tid)}}>Delete</button></td>
                    </tr>
                )
            })}
        </tbody>
        </table>
    </div>
    </Fragment>
    </div>
  );
}
