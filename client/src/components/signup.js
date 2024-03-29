
import logo from './img/logodark.png'
import './css/signin.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Signup() {

    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [pass1, setpass1] = useState('')
    const [pass2, setpass2] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(pass1)
    }
    useEffect(() => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pass1) {
            if (pass1.length > 6) {
                console.log('password ok')
            }
            else {
                console.log('password not 6')
                // preventDefault()
            }
        }

        if (isNaN(email)) {
            console.log('email')

            if (email.match(mailformat)) {
                console.log('valid')
            }
            else {
                console.log('not valid')
            }
        }
        else {

            if (email.length == 10) {
                console.log("mobile valid")
            } 
            else {
                console.log("mobile invalid")

            }
        }





        if (pass2) {
            if (pass1 == pass2) {
                console.log('correct')
            }
            else {
                console.log('incorrect')
            }
        }

    })

    return (
        <div>
            <div className="container mt-4   col-12 col-md-6  col-xl-6">
                <div className="container mt-2 col-12 col-md-6  col-xl-6">
                    <center><Link to="/products" > <img src={logo}></img></Link></center>
                </div>
                {/* <div className="col-12 col-md-6 mt-2  p-4 container alert alert-danger" role="alert">
                    Message
                </div> */}
                <div className="container p-4 border col-12 col-md-6 card">
                    <form onSubmit={handleSubmit} method="POST" className="justify-content-center w-100">
                        <h3>Create account</h3>
                        <div>
                            Your name<br></br>
                            <input className="form-control" onChange={(e) => setusername(e.target.value)} type="text" name="usname"></input>
                            <span className="ms-1 h-15"><i className="fa fa-info text-danger" aria-hidden="true"></i></span>

                        </div>
                        <div>
                            Email or mobile number<br></br>
                            <input className="form-control" onChange={(e) => setemail(e.target.value)} type="text" name="email" min="10" max="10"></input>
                            <span className="ms-1 h-15"><i className="fa fa-info text-danger" aria-hidden="true"></i> </span>

                        </div>
                        <div>
                            Password<br></br>
                            <input className="form-control" onChange={(e) => setpass1(e.target.value)} placeholder="At least 6 characters" type="password" name="pass1"></input>
                            <span className="ms-1 h-15 text-info"><i className="fa fa-info text-info" aria-hidden="true"></i> Password must be at least 6 characters.</span>
                        </div>
                        <div>
                            Password again<br></br>
                            <input className="form-control" onChange={(e) => setpass2(e.target.value)} type="password" name="pass2"></input>
                            <span className="ms-1 h-15"><i className="fa fa-info text-info" aria-hidden="true"></i> Password must be at least 6 characters.</span>

                        </div>
                        <input type="submit" className="btn mt-3 btn-warning form-control" value="Continue"></input>
                        <p className="mt-2 fs-6"> By creating an account or logging in, you agree to KMK's Conditions of Use and Privacy Policy.</p>

                        <hr className="hrr mt-5" />


                        Already have an account? <Link to="/signin" id="signlink" >Sign in </Link>

                    </form>
                </div>
                {/* <div className="mt-2  container p-4 border col-12 col-md-6">

                    <div className="row ">
                        <div className="col-3 col-xl-4">
                            <hr />
                        </div>
                        <div className="col-6 col-xl-4 text-center">
                            New to KMKautomobiles
                        </div>
                        <div className="col-3 col-xl-4">
                            <hr />
                        </div>
                    </div>
                    <div>
                        <button className="mt-3 btn btn-outline-secondary w-100 ">Create your Account</button>
                    </div>
                </div> */}

            </div>

            <hr className="hrr mt-2" />
            <center>
                <div className="me-6 container">
                    <div className="container px-5 col-12 col-xl-9  text-center row">
                        <div className="col-5 col-xl-4 text-end"> <a id="signlink" className="float-end text-dark" href="">Conditions of Use</a></div>
                        <div className="col-4 col-xl-4 text-center"> <a id="signlink" className="float-end text-dark" href="">Privacy Notice</a></div>
                        <div className="col-3 col-xl-4 text-start"> <a id="signlink" className="float-end text-dark" href="">Help</a>
                        </div>
                    </div>
                </div>
            </center>
            <div className="text-center mt-3">  © 2020 Copyright:
                <b className="text-dark"  > KMKautomobiles.com</b></div>
        </div>
    )
}
export default Signup