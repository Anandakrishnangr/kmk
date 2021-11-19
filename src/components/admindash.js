import './css/admindash.css';
import 'bootstrap/dist/css/bootstrap.css';
import logodark from './img/logodark.png'
function AdminDash() {
    function jumpin() {

        var elem = document.getElementById("dash").style.width
        if (elem == '300px') {
            document.getElementById("dash").style.paddingLeft = "0px";

            document.getElementById("dash").style.width = "0px";
            document.getElementById("navv").style.marginLeft = "0px";
            document.getElementById('bt1').style.display = ''
            document.getElementById('bt2').style.width = ''
            // document.getElementById("maini").style.marginLeft = "0px";

        }
        else {
            // document.getElementById("dash").style.paddingLeft = "20px";

            document.getElementById("dash").style.width = "300px";
            document.getElementById("navv").style.marginLeft = "300px";
            // document.getElementById("maini").style.marginLeft = "300px";

            document.getElementById('bt1').style.display = 'none'
            document.getElementById('bt2').style.width = '40px'


        }
    }

    return (

        <div className="">
            <div id="navv" className="admindashcontainer">
                <div className="row pt-2 ">
                    <div className="col-4">
                        <button className="ms-2 mt-1" id="bt1" onClick={() => jumpin()}>☰</button>
                   <a href='/'><img className="ms-5" src={logodark}></img></a>
                    </div>
                    <div className="col-4">second one</div>
                    <div className="col-4 "> third one</div>
                </div>
            </div>

            <div id="dash" className="dash-sidebar ">
                <div className="headp container-fluid">Admin Dashboard &nbsp;
                    <i class="fa fa-dashboard" aria-hidden="true"></i>
                <button className="float-end" id="bt2" onClick={() => jumpin()}>X</button>

                </div>
                <ul className="list-group text-light">
                    <a className="btn text-start sidelinkerr">Profile</a>
                    <a className="btn text-start sidelinkerr">Sellers</a>
                    <a className="btn text-start sidelinkerr">Seller Register</a>
                    <a className="btn text-start sidelinkerr">Customer Complaints</a>
                    <a className="btn text-start sidelinkerr">Seller Complaints</a>
                    <a className="btn text-start sidelinkerr">Statitics</a>
                    <a className="btn text-start sidelinkerr">Orders</a>
                    <a className="btn text-start sidelinkerr">Tracking</a>
                </ul>
            </div>
        </div>
    )
}
export default AdminDash