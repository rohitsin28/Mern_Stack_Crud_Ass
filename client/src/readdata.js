import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';


const Readdata = () => {
    const [apiData,setApiData] = useState([]);
    
    function getData() {
        axios.get('http://localhost:3001/api/router/').then((responce)=>{
            setApiData(responce.data);
        })
    }

    const handledelete = (id) => {
        axios.delete(`http://localhost:3001/api/router/${id}`)
        .then(()=>{
            getData()
        })
    }

    const handleUpdate = (id,name,lName,email,mobile,project) => {
        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('lName',lName)
        localStorage.setItem('email',email)
        localStorage.setItem('mobile',mobile)
        localStorage.setItem('project',project)
    }

    useEffect(()=>{
        getData();
    },[]);
    console.log('data',apiData)
  return (
    <div className='container my-5'>
        <Link to='/insert'><Button>Insert New Documnet</Button></Link>
        <h1 className='mt-3'>Clients Data</h1>
        <table class="table table-dark">
  <thead>
    <tr className='text-center'>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th> 
      <th scope="col">Mobile</th> 
      <th scope="col">Project</th> 
      <th scope="col">Update</th> 
      <th scope="col">Delete</th> 
    </tr>
  </thead>
  <tbody>
    {apiData.map((item,key)=>{
        return(
            <tr key={key} className='text-center'>
                <td>{key+1}</td>
                <td>{item.name}</td>
                <td>{item.lName}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.project}</td>
                <td><Link to='/update'><Button onClick={() =>handleUpdate(item._id,item.name,item.lName,item.email,item.mobile,item.project)}>Update</Button></Link></td>
                <td><Link to='/'><Button onClick={()=>{if(window.confirm("Are you sure")){handledelete(item._id)}}}>Delete</Button></Link></td>
            </tr>
        )
    })}
  </tbody>
</table>
      
    </div>
  )
}

export default Readdata
