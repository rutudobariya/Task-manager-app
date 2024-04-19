import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddTask from './components/AddTask'
export default function Layout() {
  return (
    <div>
    <Container className='p-5 mt-5 shadow'>
     <Link to="/addtasks"><button type='button' className='btn btn-sm w-25 ms-1 btn-info bg-info'>Add Task Here</button></Link>

     <Link to="/addblogs"><button type='button' className='btn btn-sm w-25 ms-1 btn-info bg-info ms-3'>Add Blogs</button></Link>
     <AddTask />
    </Container>
    </div>
  )
}
