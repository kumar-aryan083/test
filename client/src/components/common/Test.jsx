import React, { useState } from 'react';
import '../styles/Test.css';

const Test = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cnfPassword: ""
    });

    const handleClick = ()=>{
        document.querySelector(".full-popup").style.display = "flex";
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            username: "",
            email: "",
            phone: "",
            password: "",
            cnfPassword: ""
        })
        document.querySelector(".full-popup").style.display = "none";
    }
    const handleChange = (e)=>{
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
  return (
    <>
      <div className="full-test">
        <div className="btn" onClick={handleClick} >Click to register</div>
      </div>
      <div className="full-popup">
        <div className="popup-card">
            <h2>Form Submission</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' name="name" value={formData.name} onChange={handleChange}/>
                <input type="text" placeholder='Enter your username' name="username" value={formData.username} onChange={handleChange}/>
                <input type="email" placeholder='Enter your email' name="email" value={formData.email} onChange={handleChange}/>
                <input type="text" placeholder='Enter your phone number' name="phone" value={formData.phone} onChange={handleChange}/>
                <input type="password" placeholder='Enter your password' name="password" value={formData.password} onChange={handleChange}/>
                <input type="password" placeholder='Confirm your password' name="cnfPassword" value={formData.cnfPassword} onChange={handleChange}/>
                <input type="submit" value="Submit Form" />
            </form>
        </div>
      </div>
    </>
  );
}

export default Test;
