import React, {useState} from 'react';
import './Form.css'

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault ();
        const newUser = {firstname, lastname, email, password, confirmpassword}
    };

    return(
        <form onSubmit={createUser}>
            <div className="inputbox">
                <label>First Name: </label>
                <input type = "text" onChange={ (e) => setFirstname(e.target.value)} />
            </div>
            <div className="inputbox">
                <label>Last Name: </label>
                <input type = "text" onChange={ (e) => setLastname(e.target.value)} />
            </div>
            <div className="inputbox">
                <label>Email: </label>
                <input type = "text" onChange={ (e) => setEmail(e.target.value)} />
            </div>
            <div className="inputbox">
                <label>Password: </label>
                <input type = "password" onChange={ (e) => setPassword(e.target.value)} />
            </div>
            <div className="inputbox">
                <label>Confirm Password: </label>
                <input type = "password" onChange={ (e) => setConfirmpassword(e.target.value)} />
            </div>
                <p>Your Form Data:</p>
            <div className = "display">
                <p> First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </form>
    )
}

export default UserForm;