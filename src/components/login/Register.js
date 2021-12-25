import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div className="container text-white medium-box d-flex mx-auto align-items-center justify-content-center">
            <form>
                <h3 className="mt-5">Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-success btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <div href="#"><button  className="btn btn-primary btn-block">sign in?</button></div>
                </p>
            </form>
            </div>
        );
    }
}



