import './css/searchresult.css';
import 'bootstrap/dist/css/bootstrap.css';
function SellerDash(){
    return(
<div className="container pt-5">
<div className="col-2 col-sm-12 col-md-12 col-xl-2">
                        <ul className="list-group ">
                            <a className="btn text-start sidelinker">Profile</a>
                            <a className="btn text-start sidelinker">Products</a>
                            <a className="btn text-start sidelinker">Add Products</a>
                            <a className="btn text-start sidelinker">Update Products</a>
                            <a className="btn text-start sidelinker">Product Reviews</a>
                            <a className="btn text-start sidelinker">Offers</a>
                            <a className="btn text-start sidelinker">Orders</a>
                            <a className="btn text-start sidelinker">Tracking</a>
                        </ul>
                    </div>
</div>
    )
}
export default SellerDash