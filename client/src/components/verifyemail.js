
import logo from './img/logodark.png'
import './css/signin.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function Verifyemail() {

    return (
        <div>
            <div className="container mt-4   col-12 col-md-6  col-xl-6">
                <div className="container mt-2 col-12 col-md-6  col-xl-6">
                    <center>  <img src={logo}></img></center>
                </div>
                {/* <div className="col-12 col-md-6 mt-2  p-4 container alert alert-danger" role="alert">
                    Message
                </div> */}
                <div className="container card p-4 border col-12 col-md-6 card">
                    <form className="justify-content-center w-100">
                        <h3>Verify email address</h3>
                        <div>
                            To verify your email, we've sent a One Time Password (OTP) to granandakrishan@gmail.com
                            <a id="signlink">(Change)</a>
                        </div>
                        <div>
                            Enter OTP<br></br>
                            <input className="form-control" type="text" name="usname"></input>
                            <span className="ms-1 h-15"><i className="fa fa-info text-danger" aria-hidden="true"></i> </span>

                        </div>

                        <input className="btn mt-3 btn-warning form-control" value="Verify"></input>
                        <input className="btn mt-3  form-control" value="Resend OTP"></input>

                        <div className="d-none">
                            <p className="mt-2 fs-6"> Note: If you didn't receive our verification email:</p>
                                <ul>
                                    <li>  Confirm that your email address was entered correctly above.</li>
                                    <li>    Check your spam or junk e-mail folder.</li>
                                </ul>
                            
                        </div>
                        <hr className="hrr mt-5" />


                        <center>   Already have an account? <a id="signlink" href="">Sign in </a></center>

                    </form>
                </div>


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
export default Verifyemail