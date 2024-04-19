import React,{useRef,useState,useEffect} from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Container } from 'react-bootstrap'
export default function AddBlogs() {

  //fetch data used useEffect()
useEffect(()=>{
  //get all data or manage all data
  axios.get('http://localhost:4000/blogs').then(res => {
    setManageData(res.data);
    // console.log(res.data);
  })
 
  },[]); 
  const title=useRef("");
  const addeddate=useRef("");
  const photo=useRef("");
  const descriptions=useRef("");

  const[managedata,setManageData]=useState([]);
  const Navigate=useNavigate();
  // const Navigate=useNavigate("");
  const AddCategorytHandeler=(e)=>{
    e.preventDefault();  
  var insert={
  title:title.current.value,
  addeddate:addeddate.current.value,
  photo:photo.current.value,
  descriptions:descriptions.current.value
  }
  
//stored api data using  http://localhost:4000/contacts and post using axios.post()

axios.post("http://localhost:4000/blogs",insert).then(() => {
  Swal.fire({
    title: "Wow",
    text: "Thanks for adding your task!",
    icon: "success"
  });


  Navigate("/addblogs");
  window.location.reload("/addblogs");

})


e.target.reset();


}

  return (
    <>
    <Container className='p-3 mt-3 shadow'>
    <h3 className='mt-3'>Add Blogs</h3>
    <form onSubmit={AddCategorytHandeler}>
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
        <input type='submit' value="Add Task" className='btn btn-success btn-sm' />
     </div>    
    </form>

    <hr />
     {/* display task */}
     <h3>Manage All Task</h3>
    <input type='text' placeholder='Filter task' className='form-control' />
    <table className="table w-100" id='example'>
<thead>
<tr>
<th scope="col">title</th>
<th scope="col">Added Date</th>
<th scope="col">image</th>
<th scope="col">description</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
{managedata && managedata.map((row)=>{
return (
// eslint-disable-next-line react/jsx-key
<tr>

<td key={row.title}>{row.title}</td>
<td key={row.addeddate}>{row.addeddate}</td>
<td key={row.photo}><img src={row.photo} alt='slide-images' style={{width:"70px"}} className='img-fluid'/></td>
<td key={row.descriptions}>{row.descriptions}</td>

<td><button type='button' onClick={()=>Navigate(`/deleteblogs/${row.id}`)} className='btn btn-danger text-white btn-sm'><i className='bi bi-trash'></i></button>

<button type='button' onClick={()=>Navigate(`/editblogs/${row.id}`)} className='btn btn-info text-white btn-sm '><i className='bi bi-pencil '></i></button>

</td>
</tr>

);

})}

</tbody>
</table>
</Container>
      
    </>
  )
}
