import { Link } from 'react-router-dom';
import  Resume  from './assets/CV.png';
import Circle from './assets/circle1.jpg';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import SecretCodeModal from './SecretCodeModal';
function Page()
{
    const [name,setName] = useState();
    const [ ShowSecret,setShowSecret] = useState(false);
    const [edit,setEdit] = useState(false);
    const [newName,setNewName] = useState("");
    useEffect(()=>{
        axios.get("http://localhost:5000/api/name")
        .then((res)=>setName(res.data.name))
        .catch((err)=>console.log(err));
    },[]);
    function verify(code)
    {
        const code1 = import.meta.env.VITE_SECRET_CODE;
        console.log(code);
        if(code1 == code )
        {
            setEdit(true);
            setNewName(name); 
            setShowSecret(false);
            return true;
        }
        else return false;
    }
    function saveName(){
        if(!newName) return alert("Please enter name");

        axios.post("http://localhost:5000/api/name",{name:newName})
        .then(()=>{
            setName(newName);
            setEdit(false);
        })
        .catch(err=>console.log(err));
    }
    return(
        <div className="page">
           {edit && (
    <div style={{ marginTop: "10px" }}>
        <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter new name"
        />
        <button onClick={saveName} style={{ marginLeft: "5px"}}>Save</button>
    </div>
)}
            <h2 className="name" style={{cursor:'pointer'}} onClick={()=>setShowSecret(true)}>{name}</h2>
            <div className="side">
                <a href={ Resume } target="_blank"><p className="project-head">Resume</p></a>
                <Link to="/project">
                    <p className="project-head">Projects</p>
                </Link>
            </div>
            <div className="center">
                <img src={ Circle }></img>
            </div>
            <div className="bottom">
                <Link to="/about">
                    <p>About</p>
                </Link>
                <Link to="/skills">
                    <p>Skills</p>
                </Link>
            </div>
            <div className="right">
                <Link to="/feats">
                <p>Feats</p>
                </Link>
            </div>
            <div>
                {ShowSecret && <SecretCodeModal onVerify={verify} onClose={()=>setShowSecret(false)} />}
            </div>
        </div>
    )
}

export default Page;