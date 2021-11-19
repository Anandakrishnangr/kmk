import './css/testlink.css';
import { Route, Link } from 'react-router-dom'

export const Testlink = () => {
    // }
    function openit() {
        var status = document.getElementById("its");
        status.classList.toggle("linkeropen")
    }

    return (
        <div>
            <button className="tyro" onClick={() => openit()}>Show</button>
            <div id="its" className="linker g-2">



                <Link to='/signin' className="btn btn-warning w-100">Sign in</Link>
                <Link to='/signup' className="btn btn-warning w-100">Signup</Link>
                <Link to='/products' className="btn btn-warning w-100">Products</Link>
                <Link to='/productview' className="btn btn-warning w-100">Productview</Link>
                <Link to='/addproduct' className="btn btn-warning w-100">Add product</Link>
                <Link to='/admindash' className="btn btn-warning w-100">Admin</Link>
                <Link to='/home' className="btn btn-warning w-100">Home</Link>
                <Link to='/verifyemail' className="btn btn-warning w-100">Verify Email</Link>
                <Link to='/sellersignup' className="btn btn-warning w-100">Seller signup</Link>
                <Link to='/sellerhome' className="btn btn-warning w-100">Seller Dash</Link>
                <Link to='/Customerchat' className="btn btn-warning w-100">Customer Chat</Link>
                <Link to='/chat' className="btn btn-warning w-100">Customer Chat</Link>




            </div>
        </div>
    )

}
