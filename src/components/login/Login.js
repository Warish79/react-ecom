import React, { Component } from "react";



export default class Login extends Component {
    render() {
        return (
            <div className="container square-box d-flex mx-auto align-items-center justify-content-center">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        <p className="forgot-password text-right">
                         Create an Account<button className="rounded bg-dark  text-white p-1 mr-2">SignUp</button>
                         </p>
                        
                    </div>
                </div>

                <button type="submit" className="btn btn-success btn-block">Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
        );
    }
}