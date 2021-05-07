import React from 'react'

function Login() {
  return (
  <div>
     <form className="container form-group p-5">
       <div className="row  justify-content-center">
         <div className="col-md-4 border">
          <div className="row  m-4 ">
            <div className="col-md">
              <h1>Sign In</h1>
            </div>
          </div>
          <div className="row m-4">
            <div className="col-md">
              <input type="email" placeholder="Email" className="form-control"/>
            </div>
          </div>
          <div className="row  m-4">
            <div className="col-md">
              <input type="password" placeholder="Password" className="form-control"/>
            </div>
          </div>
       <div className="row  m-4">
         <div className="col-6">
            <a href="/register" className="btn btn-primary">Sign In</a>
         </div>
         <div className="col-6">
            <a href="/register" className="btn btn-primary">Sign Up</a>
         </div>
       </div>
      </div>
      
    </div>
       
  </form>
  </div>
  )
}

export default Login;
