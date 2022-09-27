import './css/searchresult.css';
import 'bootstrap/dist/css/bootstrap.css';
function AdminDash(){
    return(
<div className="container pt-5">
<div className="col-2 col-sm-12 col-md-12 col-xl-2">
                        <ul className="list-group ">
                            <a className="btn text-start sidelinker">Profile</a>
                            <a className="btn text-start sidelinker">Sellers</a>
                            <a className="btn text-start sidelinker">Seller Register</a>
                            <a className="btn text-start sidelinker">Customer Complaints</a>
                            <a className="btn text-start sidelinker">Seller Complaints</a>
                            <a className="btn text-start sidelinker">Statitics</a>
                            <a className="btn text-start sidelinker">Orders</a>
                            <a className="btn text-start sidelinker">Tracking</a>
                        </ul>
                    </div>
</div>
    )
}
export default AdminDash