import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [id,setId] = useState(0);
    const [Name,setName] = useState();
    const [LName,setLName] = useState();
    const [Email,setEmail] = useState();
    const [Mobile,setMobile] = useState();
    const [Project,setProject] = useState();
    const navigate = useNavigate();

    useEffect(()=> {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setLName(localStorage.getItem("lName"))
        setEmail(localStorage.getItem("email"))
        setMobile(localStorage.getItem("mobile"))
        setProject(localStorage.getItem("project"))
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/api/router/${id}`,{
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
    <div>
        <h1>Create Client</h1>
        <Link to='/'><Button>read all Data</Button></Link>
        <table class="table table-dark"></table>
    <form onSubmit={handleSubmit}>
    <div class="row">
        <div class="col">
        <input type="text" value={Name} class="form-control" placeholder="First name" onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div class="col">
        <input type="text" value={LName} class="form-control" placeholder="Last name" onChange={(e)=>setLName(e.target.value)} required/>
        </div>
    </div>
    <div class="row my-5">
    <div class="col">
        <input type="email" value={Email} class="form-control" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div class="col">
        <input type="mobile" value={Mobile} class="form-control" placeholder="Please enter your phone number" onChange={(e)=>setMobile(e.target.value)} required/>
        </div>
    </div>
    <div class="row my-5">
    <input type="project" value={Project} class="form-control" placeholder="Enter your project Details" onChange={(e)=>setProject(e.target.value)} required/>
    </div>
    <div className='text-center'>
        <Button type='submit' className='text-center '>Update</Button>
    </div>
</form>
    </div>
  )
}

export default Update
