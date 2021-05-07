import React, { Component } from "react";
class App extends Component {
  render() {
    return (
     <>
      <section className = "register">
        <div className="container">
            <form className = "register-content p-3">
              <h3>Sign Up</h3>
              <div class="form-group mt-3">
                <input type="text" class="form-control" placeholder="Enter Full name" id="name" autoComplete="off" /> 
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Enter email" id="email" autoComplete="off" /> 
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Enter contact number" id="number" autoComplete="off" /> 
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter your profession" id="email" autoComplete="off" /> 
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Enter password" id="pwd" autoComplete="off" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Enter confirm password" id="pwd" autoComplete="off" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
     </>
    );
  }
}

export default App;