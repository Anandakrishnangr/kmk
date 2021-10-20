
import logo from './img/logodark.png'
import './css/signin.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function Signin() {

    return (
        <div>
            <div className="container  col-12 col-md-6  col-xl-6">
                <div className="container mt-2 col-12 col-md-6  col-xl-6">
                    <center>  <img src={logo}></img></center>
                </div>
                <div class="col-12 col-md-6 mt-2  p-4 container alert alert-danger" role="alert">
                    Message
                </div>
                <div className="container p-4 border col-12 col-md-6 ">
                    <form className="justify-content-center w-100">
                        <h3>Sign In</h3>
                        Email or mobile phone number<br></br>
                        <input className="form-control" type="text" name="usname"></input>

                        <input className="btn mt-2 btn-warning form-control" value="Continue"></input>
                        <p className="mt-2"> By continuing, you agree to Kmk's Conditions of Use and Privacy Notice.</p>

                        <p>

                            <a id="signlink" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Need help?
                            </a>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="signlink">
                                <a id="signlink" href="">Forgot Password</a><br />
                                <a id="signlink" href="">Other issues with Sign-up</a>

                            </div>
                        </div>

                    </form>
                </div>
        <div className="mt-4  container p-4 border col-12 col-md-6">

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
                </div>

            </div>

            <hr className="hrr mt-5" />
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
export default Signin