import React,{useEffect,useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {Navigate, useNavigate,useParams} from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function EditBlogs()
{
//  stored all data for fetch inside of edit category input
const title=useRef("");
  const addeddate=useRef("");
  const photo=useRef("");
  const descriptions=useRef("");

const {id}=useParams();
const Navigate=useNavigate();
// fetch api  for edit data inside of edit form
useEffect(()=>{
// axios.get()
axios.get(`http://localhost:4000/blogs/${id}`).then((response)=>{
   
    title.current.value=response.data.title,
    addeddate.current.value=response.data.addeddate,
    photo.current.value=response.data.photo,
    descriptions.current.value=response.data.descriptions

         
});

},[])

// update category 
const UpdateCategoryHandeler=(e)=>
{
      
  var updcat={
         
    title:title.current.value,
    addeddate:addeddate.current.value,
    photo:photo.current.value,
    descriptions:descriptions.current.value

  }  

// applied axios.put() for update api 
axios.put(`http://localhost:4000/blogs/${id}`,updcat).then(()=>{
   //pass message for update
   Swal.fire({
    title: "success",
    text: "Data successfully Updated",
    icon: "success"
  });
  Navigate("/addblogs");

});

e.preventDefault();

}

return (
    <>
    <Container className='p-3 mt-3 shadow'>

    <h3 className='mt-3'>Update Blogs</h3>
    <form onSubmit={UpdateCategoryHandeler} className='p-5 m-3'>
     <div className='input-group'>
        <input type='text' placeholder='New Task' className='form-control mt-1' ref={title} required />
     </div>  
     <div className='input-group'>
        <input type='date' placeholder='added date' className='form-control mt-1' ref={addeddate}  required />
     </div>
     <div className='input-group'>
        <input type='url' placeholder='productimage' className='form-control mt-1' ref={photo}  required />
     </div>
     <div className='input-group'>
      <textarea className='form-control mt-1' rows="5" ref={descriptions} placeholder='Enter Product Discraption'/>
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
