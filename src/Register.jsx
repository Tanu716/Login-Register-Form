import React, { useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return (
       
        <div className="auth-form-container" >
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Your Name : </label>
            <input value={name} onChange={(e) => setName(e.target.value)}type="name" placeholder="Enter Your Name" id="name" name="name" />
            
            {/* <input value={name} name="name" id="name" placeholder=" "/> */}
          
            <label htmlFor="email">email</label> 
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Your Email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="**********" id="password" name="password"/>
            <button type="submit">Register</button>
        </form>
        <button className="link-button"  onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
       

    )
}