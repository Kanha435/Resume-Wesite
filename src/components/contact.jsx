import React from 'react'

const Contact = () => {
    return (
        <div className = "container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 border">
                    <div className="row p-3">
                        <h3>Get in touch</h3>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input type="name" class="form-control mt-2" id="inputPassword4" placeholder="Name" />
                        </div>
                        <div className="col-6">
                            <input type="email" class="form-control mt-2" id="inputPassword4" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <input type="subject" class="form-control m-3" id="inputPassword4" placeholder="Subject" />    
                    </div>
                    <div className="row">
                        <textarea name="senior-school" placeholder ="Message..." id="" cols="30" rows="3" className ="form-control m-3"></textarea>
                    </div>
                    <div className="row">
                        <button className="btn btn-primary m-3">Send Message</button>
                    </div>
                </div>
                <div className="col-md-4  bg-primary text-white">
                    <div className="row m-3">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="row  m-3">
                        <p> <b>Adress</b> :  Ellenabad ,Sirsa, Haryana , India, 125012</p>
                    </div>
                    <div className="row  m-3">
                        <p> <b>Phone </b>:  +91428782932</p>
                    </div>
                    <div className="row  m-3">
                        <p><b>Email</b> :  support@kumar.com </p>
                    </div>
                    <div className="row  m-3">
                        <p><b>Website</b> :  www.google.com </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
