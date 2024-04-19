import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate,useParams} from 'react-router-dom'
export default function DeleteBlogs() {
// destructring 
const[managecontactdata,setContactData]=useState([]);
const Navigate=useNavigate();
const{id}=useParams();

useEffect(()=>{
axios.delete(`http://localhost:4000/blogs/${id}`).then((response)=>{
    setContactData(response.data)});
    // pass swal deleted messages
    Swal.fire({
        title: "Oh",
        text: "Data successfully Deleted",
        icon: "error"
      });
      Navigate("/addblogs");
},[]);

  return (
    <div>
      
    </div>
  )
}
