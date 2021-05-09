import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom';
const Home = () => {
        const [userData , setUserData] = useState({});
        var access = "";

        const callHome = async ()=>{
            try {
                const res = await fetch('/about',{
                    method :"GET",
                    headers :{
                        Accept : "application/json",
                        "Content-Type" : "application/json"
                    },
                    credentials:"include"
                });
                const data = await res.json();
                console.log(data);
                setUserData(data);

                if(!res.status ===200){
                    window.alert("User Not Found!");
                    access = "No";
                }
            } catch (err) {
                access = "Yes";
                console.log(err);
            }
        }
        useEffect(() => {
        callHome();
        }, []);

    return (
        <>
        <div className="container p-5">
            <div class="row justify-content-center pt-5">
                <div class="col-4 text-center">
                { access==="Yes" ?
                        <h1 className = "mt-5 mb-3">Welcome</h1>
                    :
                    <>
                    <h1 className = "mt-5 mb-3">Welcome </h1>
                        <p>{userData.name}</p>
                        <NavLink to = "/resume" className ="btn btn-primary mt-5" >Create Your Resume</NavLink>
                        </> 
                    }
    
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
