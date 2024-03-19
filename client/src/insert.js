import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

const Insert = () => {
        const [Name,setName] = useState();
        const [LName,setLName] = useState();
        const [Email,setEmail] = useState();
        const [Mobile,setMobile] = useState();
        const [Project,setProject] = useState();
        const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/router/',{
            name:Name,
            lName:LName,
            email:Email,
            mobile:Mobile,
            project:Project
        }).then(()=>{
            navigate('/');
        })
    }
  return (
    <div className='container my-5'>
        <Link to='/'><Button>Read all Data</Button></Link>
        <table class="table table-dark"></table>
        <h1>Create Client</h1>
    <form onSubmit={handleSubmit}>
    <div class="row">
        <div class="col">
        <input type="text" class="form-control" placeholder="First name" onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div class="col">
        <input type="text" class="form-control" placeholder="Last name" onChange={(e)=>setLName(e.target.value)} required/>
        </div>
    </div>
    <div class="row my-5">
    <div class="col">
        <input type="email" class="form-control" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div class="col">
        <input type="mobile" class="form-control" placeholder="Please enter your phone number" onChange={(e)=>setMobile(e.target.value)} required/>
        </div>
    </div>
    <div class="row my-5">
    <input type="project" class="form-control" placeholder="Enter your project Details" onChange={(e)=>setProject(e.target.value)} required/>
    </div>
    <div className='text-center'>
        <Button type='submit' className='text-center '>Submit</Button>
    </div>
</form>
    </div>
  )
}

export default Insert
