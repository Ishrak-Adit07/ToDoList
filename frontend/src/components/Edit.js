import React,{Fragment, useState} from 'react';

export default function Edit(props) {
  const {todo} = props;
  const [description, setDescription] = useState( todo.description );

  const editTodo = async(e) =>{
    try {
      
      e.preventDefault();
      const body = {description};
      const response = await fetch(`http://localhost:4000/todos/${todo.tid}`, {
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body),
      });
      window.location = ("/");

    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <Fragment>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#${todo.tid}`}>Edit Text</button>   

<div class="modal" id={`${todo.tid}`} onClick={()=>{setDescription(todo.description)}}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
      </div>

      <div class="modal-body">
        <input type='text' className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </div>

      <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={(e)=>editTodo(e)}>Edit</button>
      <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>{setDescription(todo.description)}}>Close</button>
      </div>

    </div>
  </div>
</div>
      </Fragment>
    </div>
  )
}
