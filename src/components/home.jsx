import React from 'react'
import {NavLink} from 'react-router-dom';
const Home = () => {
    return (
        <>
        <div className="container p-5">
            <div class="row justify-content-center pt-5">
                <div class="col-4 text-center">
                <h1 className = "mt-5 mb-3">Welcome</h1>
                <NavLink to = "/resume" className ="btn btn-primary mt-5" >Create Your Resume</NavLink> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
