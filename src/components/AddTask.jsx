import React,{useRef,useState,useEffect} from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function AddTask() {


//fetch data used useEffect()
useEffect(()=>{
  //get all data or manage all data
  axios.get('http://localhost:4000/tasks').then(res => {
    setManageData(res.data);
    // console.log(res.data);
  })
 
  },[]); 
  
 // if we pass [] array one times renders data
  
 const addtask=useRef("");
  const addeddate=useRef("");
  const[managedata,setManageData]=useState([]);
  const Navigate=useNavigate();
  // const Navigate=useNavigate("");
  const AddCategorytHandeler=(e)=>{
    e.preventDefault();  
  var insert={
  addtask:addtask.current.value,
  addeddate:addeddate.current.value
  }
  
//stored api data using  http://localhost:4000/contacts and post using axios.post()

axios.post("http://localhost:4000/tasks",insert).then(() => {
  Swal.fire({
    title: "Wow",
    text: "Thanks for adding your task!",
    icon: "success"
  });


  Navigate("/");
  window.location.reload("/");

})


e.target.reset();


}



  return (
    <>


<Container className='p-3 mt-3 shadow'>
    <h3 className='mt-3'>Task managing App</h3>
    <form onSubmit={AddCategorytHandeler}>
     <div className='input-group'>
        <input type='text' placeholder='New Task' className='form-control' ref={addtask}  required />
     </div>  
     <div className='input-group'>
        <input type='date' placeholder='added date' className='form-control' ref={addeddate}  required />
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
<th scope="col">Category Name</th>
<th scope="col">Added Date</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
{managedata && managedata.map((row)=>{
return (
// eslint-disable-next-line react/jsx-key
<tr>

<td key={row.addtask}>{row.addtask}</td>
<td key={row.addeddate}>{row.addeddate}</td>
<td><button type='button' onClick={()=>Navigate(`/deletetask/${row.id}`)} className='btn btn-danger text-white btn-sm'><i className='bi bi-trash'></i></button>

<button type='button' onClick={()=>Navigate(`/edittask/${row.id}`)} className='btn btn-info text-white btn-sm ms-2'><i className='bi bi-pencil '></i></button>

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
