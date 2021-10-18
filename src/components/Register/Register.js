import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form onSubmit="" style={{ width: "25rem" }} className="mx-auto p-3 my-4 shadow bg-light rounded">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your Password" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Re-enter Password" />
                </div>
                <button type="submit" className="btn w-100 btn-primary mb-3 ">Register</button>
                <p>Already have an account? <Link to="/login">Sign In</Link> </p>
                <hr />

            </form>
            <div className="text-center">
                <p>or</p>
                <button className="btn btn-outline-info">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;