import React,{useEffect,useRef} from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'

import Swal from 'sweetalert2'
import {Navigate, useNavigate,useParams} from 'react-router-dom'

export default function EditTasks()
{
//  stored all data for fetch inside of edit category input
const addtask=useRef("");
const  addeddate=useRef("");
const {id}=useParams();
const Navigate=useNavigate();
// fetch api  for edit data inside of edit form
useEffect(()=>{
// axios.get()
axios.get(`http://localhost:4000/tasks/${id}`).then((response)=>{
   
    addtask.current.value=response.data.addtask,
    addeddate.current.value=response.data.addeddate
         
});

},[])

// update category 
const UpdateCategoryHandeler=(e)=>
{
      
  var updcat={
         
    addtask:addtask.current.value,
    addeddate:addeddate.current.value

  }  

// applied axios.put() for update api 
axios.put(`http://localhost:4000/tasks/${id}`,updcat).then(()=>{
   //pass message for update
   Swal.fire({
    title: "success",
    text: "Data successfully Updated",
    icon: "success"
  });
  Navigate("/");

});

e.preventDefault();

}

return (
<>
<Container className='p-3 mt-3 shadow'>

<h3 className='mt-3'>Task managing App</h3>
    <form onSubmit={UpdateCategoryHandeler}>
     <div className='input-group'>
        <input type='text' placeholder='New Task' className='form-control' ref={addtask}  required />
     </div>  
     <div className='input-group'>
        <input type='date' placeholder='added date' className='form-control' ref={addeddate}  required />
     </div>
     <div className='input-group mt-3'>
        <input type='submit' value="Update Task" className='btn btn-success btn-sm' />
     </div>    
    </form>

    <hr />
    </Container>
</>
)
}
