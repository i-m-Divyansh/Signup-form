import React from 'react';
import { signout } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Signout = () => {

    // dispatch hook
    const dispatch = useDispatch();

    // useSelector hook
    const user = useSelector(selectUser);

    // signoutHandler method
    const signoutHandler = () => {
        dispatch(signout());
    }

    console.log("USER", user);

    return (
        <div className="form text-align-center">
            <h1>Welcome 👋 </h1>
            <h1><span className="user">{user.name}</span></h1>
            <button onClick={signoutHandler} className="logoutBtn">Logout</button>
        </div>
    )
}

export default Signout;
