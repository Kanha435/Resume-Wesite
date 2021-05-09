import React,{useEffect , useState} from 'react'
import {useHistory} from 'react-router-dom';
const About = () => {
        const history = useHistory();
        const [userData , setUserData] = useState({});
        const callAbout = async ()=>{
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
                }
            } catch (err) {
                console.log(err);
                history.push("/login");
            }
        }
        useEffect(() => {
        callAbout();
        }, []);

        return (
        <div className = "conatiner">
            <form method="GET">
                <div className="row">
                    <div className="col-12">
                        <h1 className = "text-center">Resume</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className = "text-center">jhfoheo</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className = "text-center">enfoeo</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className = "text-center">{userData.email}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className = "text-center">{userData.number}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className = "text-center">{userData.profession}</h1>
                    </div>
                </div>
                
            </form>  
        </div>
    )
}

export default About;
