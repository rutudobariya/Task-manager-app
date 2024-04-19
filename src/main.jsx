import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import AddBlogs from './components/AddBlogs.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import AddTask from './components/AddTask.jsx'
import DeleteTask from './components/DeleteTask.jsx'
import EditTasks from './components/EditTasks.jsx'
import DeleteBlogs from './components/DeleteBlogs.jsx'
import EditBlogs from './components/EditBlogs.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/addtasks" element={<AddTask />} />
        <Route path="/deletetask/:id" element={<DeleteTask/>} />
        <Route path="/edittask/:id" element={<EditTasks/>} />

        <Route path="/addblogs" element={<AddBlogs />} />
        <Route path="/editblogs/:id" element={<EditBlogs/>} />
        <Route path="/deleteblogs/:id" element={<DeleteBlogs/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
