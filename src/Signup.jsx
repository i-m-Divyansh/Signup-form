import React, { useState } from 'react';
import Signout from './Signout';

import { useDispatch } from 'react-redux';
import { signup } from './features/userSlice';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

// signup component
const Signup = () => {
    // useState hook
    const [Info, setInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    // useSelector hook
    const user = useSelector(selectUser)

    // dispatch hook
    const dispatch = useDispatch();

    // destructuring
    const { name, email, password } = Info;

    // signupform method
    const form = () => {
        return (
            <form className="form">
                <h1 className="text-align-center">Signup Here 🚪</h1>
                <input
                    name="name"
                    value={name}
                    onChange={changeHandler('name')}
                    placeholder="Name"
                    type="text"
                />
                <br />
                <input
                    name="email"
                    value={email}
                    onChange={changeHandler('email')}
                    placeholder="Email"
                    type="email"
                />
                <br />
                <input
                    name="password"
                    value={password}
                    onChange={changeHandler('password')}
                    placeholder="Password"
                    type="password"
                />
                <br />

                <button className='btn' onClick={submitHandler} type="submit">Submit</button>
            </form>
        )
    }

    // changeHandler method
    const changeHandler = name => (e) => {
        const value = e.target.value;
        setInfo({ ...Info, [name]: value })
    }

    // submitHandler
    const submitHandler = (e) => {

        // preventing default submit
        e.preventDefault();

        // regex
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;
        let special = /[!@#$%^&*(),.?":{}|<>]/g;

        // validations
        if (!name || !email || !password) {
            alert('Please include all fiels first! 😤');
        } else if (name.trim() == 0 || email.trim() == 0 || password.trim() == 0) {
            alert('Spaces are not allowed as values! 🛑');
        } else if (!password.match(lowerCaseLetters) || !password.match(upperCaseLetters)
            || !password.match(numbers) || !password.match(special)) {
            alert('Password should contain a lowercase letter, a uppercase letter, a number & a special character! ☠')
        } else {
            dispatch(signup({
                name: name,
                email: email,
                password: password
            }))
            setInfo({ name: "", email: "", password: "" });
            alert('Signed up successfully! 👍');
        }
    }

    // return
    return (
        <div className="main">
            {user ?
                <Signout />
                :
                form()
            }
        </div>
    )
}

export default Signup;
