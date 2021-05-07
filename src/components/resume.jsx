import React from 'react'

function Resume() {
    return (
        <div className = "container border  mt-3">
            <h3 className = "text-center mb-3 mt-3">Build your Resume</h3>
           <div class="row g-3 m-2">
               <div className="col g-3">
                   <div className="row card p-2"> <h5 >Education Details : </h5>
                        <div className="row">
                            <div class="col">
                                <textarea name="senior-school" placeholder ="Enter Your Senior Secondary School...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-6">
                            <input type="number" class="form-control mt-2" id="inputPassword4" placeholder ="Enter year of passing"/>
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control mt-2" id="inputPassword4" placeholder="Enter Percentage or Grade in /10" />
                            </div>
                        </div> 
                        <div className="row mt-4">
                            <div class="col">
                                <textarea name="senior-school" placeholder ="Enter Your Collage/University name......" id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-6">
                            <input type="number" class="form-control mt-2" id="inputPassword4" placeholder ="Enter year of passing"/>
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control mt-2" id="inputPassword4" placeholder="Enter Percentage or Grade in /10" />
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="row card p-2 mt-4 m-2"> 
                <h5 >Skills : </h5>
                <div className="row">
                    <div class="col">
                        <textarea name="Skills" placeholder ="Enter Your Skills...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                    </div>
                </div>
            </div>
            <div className="row card p-2 mt-4 m-2"> 
                <h5 >Trainings : </h5>
                <div className="row">
                    <div class="col">
                        <textarea name="Skills" placeholder ="Enter Your work experience...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                    </div>
                </div>
            </div>
            <div className="row card p-2 m-2 mt-4"> 
                <h5 >Interships : </h5>
                <div className="row">
                    <div class="col">
                        <textarea name="Skills" placeholder ="Any Other intership...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                    </div>
                </div>
            </div>
            <div class="row g-3 m-2 mt-4">
               <div className="col g-3">
                   <div className="row card p-2"> <h5 >Address Details : </h5>
                        <div className="row">
                            <div class="col">
                                <textarea name="address" placeholder ="Enter Your Address...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-6">
                            <input type="number" class="form-control mt-2" id="inputPassword4" placeholder ="City"/>
                            </div>
                            <div class="col-md-4">
                                <input type="number" class="form-control mt-2" id="inputPassword4" placeholder="State" />
                            </div>
                            <div class="col-md-2">
                                <input type="number" class="form-control mt-2" id="inputPassword4" placeholder="Pincode" />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-3">
                <button type="submit" className="col-4 btn btn-primary text-center m-auto">Submit</button>
            </div>
        </div>
    )
}

export default Resume;
