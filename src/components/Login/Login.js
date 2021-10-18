import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <form onSubmit="" style={{ width: "25rem" }} className="mx-auto p-3 my-4 shadow bg-light rounded">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn w-100 btn-primary mb-3 ">login</button>
                <p>New User? <Link to="/register">Create Account</Link> </p>
                <hr />

            </form>
            <div className="text-center">
                <p>or</p>
                <button onClick={handleGoogleLogIn} className="btn btn-outline-info">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;