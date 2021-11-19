import { useState } from "react";
import './css/productview.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import img from './img/291-2916845_.png'
import { Button, Collapse } from 'react-bootstrap'
import truck from './img/delivery-truck.png'
import cash from './img/cash.png'
import ret from './img/return.png'
import logo from './img/logo.png'
import guarantee from './img/guarantee.png'
function Theproductview() {


    const [open, setOpen] = useState(false);

    return (
        <div className="container-fluid  productview">
            <div className="container-fluid row  border bg-dark text-light mx-0">here go the location path</div>
            <div className="container-fluid row  border  mx-0 py-4">
                <div className="container col-12 col-md-4 col-xl-5 ">
                    <img className="border img-thumbnail thumby" src={img}></img>
                </div>

                <div className="container col-12 col-md-4  col-xl-5 py-4">
                    <h4 className="head">
                        Lenovo IdeaPad Gaming 3 AMD Ryzen 5 4600H 15.6" (39.63cm) FHD IPS Gaming Laptop
                        (8GB/512GB SSD/Windows10/NVIDIA GTX 1650 4GB/120Hz Refresh Display/Onyx Black/2.2Kg),
                        x82EY00UAIN + Xbox Game Pass for PC
                    </h4>
                    <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-center"> 132 ratings | 200 orders</span>
                    </div>
                    <div className="kmkchoice">
                        <font color="white">Kmk's </font><font color="gold">Choice</font>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col-xl-5">
                            <table className="table table-borderless ">
                                <tbody>
                                    <tr>
                                        <td className="tabledef fw-lighter fs-6" scope="row">M.R.P:</td>
                                        <td>8000</td>
                                    </tr>
                                    <tr>
                                        <td className="tabledef fw-lighter fs-6" scope="row">Deal of the Day:</td>
                                        <td className="text-danger">$3000</td>

                                    </tr>
                                    <tr>
                                        <td className="tabledef fw-lighter fs-6" scope="row">You save:</td>
                                        <td className="text-danger">$5000</td>

                                    </tr>

                                    <tr>
                                        <td scope="row"></td>
                                        <td>Inclusive of all taxes</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* save extra */}
                    {/* <>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            click to see more
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                100 cash back
                            </div>
                        </Collapse>
                    </> */}

                    {/* ends */}

                    <hr />
                    <div className="row">
                        <div className="col-3 text-center"> <img className="icothumb" src={cash} /><br />Pay on delivery </div>
                        <div className="col-3 text-center"> <img className="icothumb" src={guarantee} /><br />10 days replacement</div>
                        <div className="col-3 text-center"> <img className="icothumb" src={truck} /><br />KMK delivered </div>
                        <div className="col-3 text-center"> <img className="icothumb" src={ret} /><br />1 year warrenty</div>
                    </div>
                    <hr />

                    <div id="instock">
                        In stock.
                    </div>
                    {/* <div id="outstock">
                    Out of stock.
                    </div> */}

                    <div id="sellerdetails">
                        Sold by kmk and fulfilled by kmk.
                    </div>

                    <div id="pricedetails" className="row text-left">
                        <div className="col-3">New from 1200. </div>
                        <div className=" col-6 w-1">
                            <img src={logo} height="20" width="100"></img> Free Delivery
                        </div>
                    </div>
                    <div>
                        Size
                        <div className="p-1 gx-7">
                            <a className="btn btn-outline-danger">S</a>
                            <a className="btn btn-outline-danger">M</a>
                            <a className="btn btn-outline-danger">L</a>
                            <a className="btn btn-outline-danger">XL</a>
                            <a className="btn btn-outline-danger">XXL</a>
                            <a className="btn btn-outline-danger">XXXL</a>

                        </div>
                    </div>
                    <hr />
                    {/* model details */}

                    <div className="row">
                        <div className="col-xl-5 col-sm-12">
                            <table className="table table-borderless ">
                                <tbody>
                                    <tr>
                                        <td className=" fw-lighter fs-6" scope="row">Model Name</td>
                                        <td>Ideapad</td>
                                    </tr>
                                    <tr>
                                        <td className=" fw-lighter fs-6" scope="row">Brand</td>
                                        <td className="fs-6r">Lenovo</td>

                                    </tr>
                                    <tr>
                                        <td className=" fw-lighter fs-6" scope="row">Specific use for</td>
                                        <td className="fs-6">light use</td>

                                    </tr>
                                    <tr>
                                        <td className=" fw-lighter fs-6" scope="row">Model Name</td>
                                        <td>Ideapad</td>
                                    </tr>
                                    <tr>
                                        <td className=" fw-lighter fs-6" scope="row">Brand</td>
                                        <td className="fs-6">Lenovo</td>

                                    </tr>
                                    <tr>
                                        <td className=" fw-lighter fs-6" scope="row">Specific use for</td>
                                        <td className="fs-6">light use</td>

                                    </tr>

                                    {/* <tr>
                                        <td scope="row"></td>
                                        <td>Inclusive of all taxes</td>

                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/*end model details */}
                    <hr />
                    {/* about the product */}
                    <div >
                        <h5>About this product</h5>
                        <ul>
                            <li>Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered
                                late 2021 into 2022. Specific timing varies by device. Certain features require specific hardware.</li>
                            <li>Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered
                                late 2021 into 2022. Specific timing varies by device. Certain features require specific hardware.</li>
                            <li>Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered
                                late 2021 into 2022. Specific timing varies by device. Certain features require specific hardware.</li>
                            <li>Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered
                                late 2021 into 2022. Specific timing varies by device. Certain features require specific hardware.</li>
                            <li>Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered
                                late 2021 into 2022. Specific timing varies by device. Certain features require specific hardware.</li>
                            <li>Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered
                                late 2021 into 2022. Specific timing varies by device. Certain features require specific hardware.</li>
                            <li>Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered
                                late 2021 into 2022. Specific timing varies by device. Certain features require specific hardware.</li>
                            <li>Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered
                                late 2021 into 2022. Specific timing varies by device. Certain features require specific hardware.</li>
                        </ul>
                    </div>
                    {/* end of about the product */}




                </div>

                {/*  3rd col */}

                <div className="container  gx-5  col-12 col-md-4 col-xl-2 border py-4">

                    {/* offer */}

                    <h6>Without Exchange</h6>
                    <div className="row">
                        <div className="col text-danger">2000$</div>   <div className="col "><strike>3400$</strike></div>
                    </div>

                    {/* Product */}

                    <div>
                        <h5 className="head">
                            Lenovo IdeaPad Gaming 3 AMD Ryzen 5 4600H 15.6" (39.63cm) FHD IPS Gaming Laptop
                            (8GB/512GB SSD/Windows10/NVIDIA GTX 1650 4GB/120Hz Refresh Display/Onyx Black/2.2Kg),
                            x82EY00UAIN + Xbox Game Pass for PC
                        </h5>
                    </div>
                    {/* select quantity */}

                    <div className="row">
                        <div className="col ">Quantity  <input className="form-control quanty" type='number' min="1" max="12"></input></div>
                    </div>

                    {/* buy and addtocart buttons */}

                    <div className="row">
                        <div className=" "><input className="btn btn-warning shadow  addtocart" type="button" value="Add to cart"></input></div>
                        <div className=" "><input className="btn   buy" type="button" value="Buy now"></input></div>
                        <div className=" my-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>&nbsp;
                            <label className="form-check-label" for="flexCheckDefault">
                                Add gift option
                            </label>
                        </div>
                    </div>

                    {/* wishlist */}

                    <div><button className="btn wishlistbutton ">Add to wishlist</button></div>
                </div>
            </div>

            {/* frequent */}

            <div className="container-fluid row  border  mx-0">
                <h4>Frequently brought together</h4>

                <div className="row col-6">
                    <div className="col thumbcol">
                        <img className="thumbnailcustomsmall" src={img}></img>
                    </div>
                    <div className="col thumbcol">
                        <img className="thumbnailcustomsmall" src={img}></img>
                    </div>
                    <div className="col thumbcol">
                        <img className="thumbnailcustomsmall" src={img}></img>
                    </div>
                    <div className="col thumbcol my-5">
                        <button className="addtocart btn btn-warning frequentbutton">Add all 3 to cart</button>
                    </div>
                </div>
            </div>
            <div className="container row  border">
                <div className="container-fluid col-12 col-xl-6">
                    <img className="border img-thumbnail" src={img}></img>
                </div>
                <div className="container col-12 col-xl-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ante at risus consectetur pulvinar. Vivamus ante enim, egestas at scelerisque laoreet, vestibulum non justo. Vivamus et sem at purus rutrum pharetra id sed lorem. Curabitur malesuada sem sit amet erat fringilla placerat. Donec varius mi convallis dolor facilisis, eget blandit quam hendrerit. Nullam imperdiet vel nunc ut pellentesque. Maecenas non consequat ipsum. Sed at faucibus lorem. Integer finibus tempus magna, eget convallis dolor cursus nec. Aenean porta sapien at dolor mollis semper. Ut tincidunt in nisl eu laoreet. Praesent elementum sollicitudin pretium. Quisque vel diam nec dui convallis bibendum eget at elit. Maecenas vel justo quis dolor cursus viverra. Donec dapibus libero nisi, maximus ornare tellus accumsan eget.

                    Suspendisse dictum odio sit amet convallis dictum. Duis condimentum odio elit, porttitor ultricies nulla imperdiet mollis. Ut vitae eros ornare, sodales felis et, hendrerit massa. Praesent tincidunt vehicula risus, nec tempus velit. Donec in quam ullamcorper, efficitur nibh at, faucibus elit. Suspendisse dapibus, nisi at fermentum eleifend, lectus mauris vehicula sem, eu fermentum magna tortor id libero. Nullam consequat cursus ligula, ut ornare dui varius quis. Ut vehicula a nibh vel malesuada. Suspendisse ac dictum nibh. Donec id sollicitudin felis.

                    Nunc eget mi nibh. Nam fermentum enim ut augue varius, rutrum laoreet velit eleifend. Aliquam nisl massa, varius vitae mi vitae, dapibus accumsan purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque feugiat magna vitae eros venenatis, a pulvinar massa ornare. Suspendisse sodales ornare nisl, nec euismod nulla mollis vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ut neque rutrum, elementum eros in, hendrerit sem. Fusce facilisis libero sit amet tellus pharetra dapibus. Suspendisse id nulla vestibulum, mattis leo non, tincidunt orci.

                    Vestibulum posuere congue dui, a cursus diam blandit ac. Aenean risus nisi, mollis eu odio non, porttitor cursus leo. Sed suscipit, sem eget rutrum aliquet, urna erat efficitur elit, sed commodo dolor erat sit amet mauris. Sed vel suscipit ex. Nunc condimentum neque vitae pharetra condimentum. Aenean eget vestibulum orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur consequat aliquam massa at finibus. Donec rhoncus pharetra dolor id bibendum. Etiam dignissim egestas nisi non efficitur. Vestibulum quis nisi a elit ultricies egestas. Sed dolor magna, volutpat quis lorem sit amet, cursus eleifend justo. Curabitur ultricies scelerisque arcu sed condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                    In odio lectus, bibendum eget orci ut, posuere pellentesque tortor. Morbi sollicitudin odio nulla, sed consectetur augue pretium eget. Vivamus non massa vitae erat pretium ornare ut vel ante. Praesent massa odio, viverra eget placerat in, lobortis nec massa. In posuere eget quam at gravida. Nam scelerisque eros non orci facilisis semper. Phasellus ac rhoncus ante. Pellentesque nulla orci, aliquam id laoreet non, sagittis in ipsum. Integer placerat leo quis quam porttitor congue. Quisque tristique, lorem id feugiat sagittis, dolor quam bibendum nisl, in molestie lectus velit in sapien. Ut vel justo quis arcu tempor lobortis. Vestibulum cursus odio hendrerit egestas pellentesque. Etiam ut lobortis turpis. Aenean nulla magna, vehicula nec augue ac, porta condimentum nulla. Nulla diam ante, molestie vel pretium quis, accumsan in justo. Nunc ut ornare quam.

                    Sed condimentum consectetur congue. Duis justo diam, suscipit eu iaculis vitae, dignissim sed justo. Sed libero tellus, lacinia quis convallis in, porta nec sapien. Vestibulum pharetra porttitor dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent ut tortor eleifend, pharetra arcu eget, accumsan mauris. Proin dapibus iaculis lectus eget imperdiet. Morbi semper blandit erat. Phasellus ac vulputate risus. Duis nec nunc consequat, iaculis elit molestie, rhoncus ligula. Praesent tristique dapibus lorem vel tempus.

                    Nam quam magna, lacinia id ante ac, dignissim accumsan tortor. Mauris elementum quam sit amet eros porttitor porttitor. Morbi nec aliquam orci. Aliquam sit amet risus gravida, cursus odio vel, mattis felis. Vivamus bibendum justo in nunc gravida rhoncus. Proin enim mi, feugiat vel euismod at, egestas quis odio. Morbi rutrum fringilla nunc ut varius. Vestibulum sit amet mattis nulla, sed finibus quam. Duis condimentum tristique suscipit. Nam imperdiet massa sit amet convallis sodales. Suspendisse elementum ultrices eros, ut venenatis quam. Etiam in est dapibus, sodales metus ac, vehicula ante. Mauris a elementum sapien. Quisque elit ex, vehicula quis sodales nec, dictum sed mauris. Sed vel enim finibus nibh scelerisque placerat. Etiam ac enim sit amet odio maximus placerat.

                    Nam fermentum, lectus at finibus mollis, arcu dui suscipit diam, quis facilisis mi ipsum at dui. Suspendisse nec ullamcorper ipsum, ut placerat massa. Donec at nibh dui. Curabitur mollis elit purus, nec rutrum felis volutpat a. Sed rhoncus gravida massa, non facilisis magna congue sed. Nunc mollis dictum erat, vel interdum nulla. Vivamus iaculis eros eu enim interdum, in venenatis eros molestie. Vivamus et augue arcu. Sed quis nunc tortor.
                </div>
            </div>


        </div>
    )
}
export default Theproductview