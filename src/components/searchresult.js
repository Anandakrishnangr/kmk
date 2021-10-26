import './css/searchresult.css';
import 'bootstrap/dist/css/bootstrap.css';
import img from './img/291-2916845_.png'
import {Link, useHistory} from 'react-router-dom'

function Searchresult() {



    return (
        <div className="sear">
            <div className="container-fluid row border pt-5 mx-0 mobdo">
                <div className="container-fluid p-0 col-xl-2 col-md-2 border sidefilter ">
                    <h6 className="mt-3 ms-2">Department</h6>
                    <div>
                        <ul className="list-group ">
                            <a className="btn text-start sidelinker">Tyre</a>
                            <a className="btn text-start sidelinker">Electrical</a>
                            <a className="btn text-start sidelinker">Air conditioning</a>
                            <a className="btn text-start sidelinker">Coolant</a>
                            <a className="btn text-start sidelinker">Alloy</a>
                            <a className="btn text-start sidelinker">Seat</a>
                            <a className="btn text-start sidelinker">Accesories</a>
                            <a className="btn text-start sidelinker">Graphics</a>
                        </ul>
                    </div>
                    <h6 className="mt-3 ms-2">Customer Review</h6>
                    <div className="ms-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                        &nbsp;
                    </div>
                    <div className="ms-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        &nbsp;
                    </div>
                    <div className="ms-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        &nbsp;
                    </div>

                    <div className="ms-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star "></span>
                        &nbsp;
                    </div>
                    <h6 className="mt-3 ms-2">Brand</h6>
                    <div className="ms-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                MRF
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Castrol
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Servo
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                HP
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Motule
                            </label>
                        </div>
                    </div>
                    <div className="row ms-2">
                        <div className="col">
                            <input type="number" className="form-control minmax" placeholder="Min"></input>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control minmax" placeholder="Max"></input>
                        </div>
                        <div className="col"> <input type="button" className="form-control " value="Go"></input></div>
                    </div>
                </div>
                <div className="col-xl-10 col-md-10  ">
                    {/* 1 */}
                    <Link to="/productview?k=iop" id="roy">
                    <div className="row customcard mx-1">
                        <div className="col-xl-3 col-md-4 col-sm-12 imgcontainer">
                            <img className="img-thumbnail " src={img}></img>
                        </div>
                        <div className="col-xl-9 col-md-8 col-sm-12">
                            <div className="captionser">MSI Bravo 15, Ryzen 7 5800H, 15.6" FHD IPS-Level 144Hz Panel Laptop (16GB/512GB NVMe SSD/Windows 10 Home/RX5500M, GDDR6 4GB/Black/2.35Kg), B5DD-077IN (Bravo 15 B5DD-077IN)</div>
                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star "></span>
                                &nbsp;
                                <span className="text-center dropdown-toggle"> </span>&nbsp;132
                            </div>
                            <div><button className="btn btn-warning">Great sale offer</button></div>
                            <div>
                                <b className="text-danger  pricein"> $5000 </b>
                                <em className="priceout  text-decoration-line-through"> $8000 </em>
                                <em className="misdetail"> Save $1548 (18%) </em>
                            </div>
                            <div  className="misdetails">
                                Save extra with No Cost EMI
                            </div>
                            <div  className="misdetails ">
                                Get it by tomorrow, October 30<br></br> Free Delivery by KMK
                            </div>
                        </div>
                    </div>
                    </Link>
                    
                    {/* end */}
                    {/* <hr />
                    <div className="row">
                        <div className="col-xl-3 col-md-4 col-5 imgcontainer">
                            <img className="img-thumbnail" src={img}></img>
                        </div>
                        <div className="col-xl-9 col-md-8 col-7 ">
                            <div className="captionser">
                                MSI MSI Bravo 15, Ryzen 7 5800H, 15.6" FHD IPS-Level 
                                    144Hz Panel Laptop Bravo 15, Ryzen 7 5800H, 15.6" 
                                    FHD IPS-Level 144Hz Panel Laptop MSI Bravo 15, Ryzen 7
                                     5800H, 15.6" FHD IPS-Level 144Hz Panel Laptop  MSI Bravo
                                      15, Ryzen 7 5800H, 15.6" FHD IPS-Level 144Hz Panel 
                                      Laptop  (16GB/512GB NVMe SSD/Windows 10 Home/RX5500M,
                                       GDDR6 4GB/Black/2.35Kg), B5DD-077IN (Bravo 15 B5DD-077IN)
                                       </div>
                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star "></span>
                                &nbsp;
                                <span className="text-center dropdown-toggle"> </span>&nbsp;132
                            </div>
                            <div><button className="btn btn-warning">Great sale offer</button></div>
                            <div>
                                <b className="text-danger  pricein">$5000</b>
                                <em className="priceout  text-decoration-line-through">$8000</em>
                                <em className="">Save $1548 (18%)</em>
                            </div>
                            <div>
                                Save extra with No Cost EMI
                            </div>
                            <div>
                                Get it by tomorrow, October 30<br></br> Free Delivery by KMK
                            </div>
                        </div>
                    </div>
                    <hr /> */}
                    {/* 1 */}
                    <hr/>
                    <Link to="/productview?k=iop" id="roy">
                    <div className="row customcard mx-1">
                        <div className="col-xl-3 col-md-4 col-sm-12 imgcontainer">
                            <img className="img-thumbnail " src={img}></img>
                        </div>
                        <div className="col-xl-9 col-md-8 col-sm-12">
                            <div className="captionser">MSI Bravo 15, Ryzen 7 5800H, 15.6" FHD IPS-Level 144Hz Panel Laptop (16GB/512GB NVMe SSD/Windows 10 Home/RX5500M, GDDR6 4GB/Black/2.35Kg), B5DD-077IN (Bravo 15 B5DD-077IN)</div>
                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star "></span>
                                &nbsp;
                                <span className="text-center dropdown-toggle"> </span>&nbsp;132
                            </div>
                            <div><button className="btn btn-warning">Great sale offer</button></div>
                            <div>
                                <b className="text-danger  pricein"> $5000 </b>
                                <em className="priceout  text-decoration-line-through"> $8000 </em>
                                <em className="misdetail"> Save $1548 (18%) </em>
                            </div>
                            <div  className="misdetails">
                                Save extra with No Cost EMI
                            </div>
                            <div  className="misdetails ">
                                Get it by tomorrow, October 30<br></br> Free Delivery by KMK
                            </div>
                        </div>
                    </div>
                    </Link>
                    {/* end */}
                    <hr />
                    {/* 1 */}
                    <div className="row customcard mx-1">
                        <div className="col-xl-3 col-md-4 col-sm-12 imgcontainer">
                            <img className="img-thumbnail " src={img}></img>
                        </div>
                        <div className="col-xl-9 col-md-8 col-sm-12">
                            <div className="captionser">MSI Bravo 15, Ryzen 7 5800H, 15.6" FHD IPS-Level 144Hz Panel Laptop (16GB/512GB NVMe SSD/Windows 10 Home/RX5500M, GDDR6 4GB/Black/2.35Kg), B5DD-077IN (Bravo 15 B5DD-077IN)</div>
                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star "></span>
                                &nbsp;
                                <span className="text-center dropdown-toggle"> </span>&nbsp;132
                            </div>
                            <div><button className="btn btn-warning">Great sale offer</button></div>
                            <div>
                                <b className="text-danger  pricein"> $5000 </b>
                                <em className="priceout  text-decoration-line-through"> $8000 </em>
                                <em className="misdetail"> Save $1548 (18%) </em>
                            </div>
                            <div  className="misdetails">
                                Save extra with No Cost EMI
                            </div>
                            <div  className="misdetails ">
                                Get it by tomorrow, October 30<br></br> Free Delivery by KMK
                            </div>
                        </div>
                    </div>
                    {/* end */}
                    <hr />
                    {/* 1 */}
                    <div className="row customcard mx-1">
                        <div className="col-xl-3 col-md-4 col-sm-12 imgcontainer">
                            <img className="img-thumbnail " src={img}></img>
                        </div>
                        <div className="col-xl-9 col-md-8 col-sm-12">
                            <div className="captionser">MSI Bravo 15, Ryzen 7 5800H, 15.6" FHD IPS-Level 144Hz Panel Laptop (16GB/512GB NVMe SSD/Windows 10 Home/RX5500M, GDDR6 4GB/Black/2.35Kg), B5DD-077IN (Bravo 15 B5DD-077IN)</div>
                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star "></span>
                                &nbsp;
                                <span className="text-center dropdown-toggle"> </span>&nbsp;132
                            </div>
                            <div><button className="btn btn-warning">Great sale offer</button></div>
                            <div>
                                <b className="text-danger  pricein"> $5000 </b>
                                <em className="priceout  text-decoration-line-through"> $8000 </em>
                                <em className="misdetail"> Save $1548 (18%) </em>
                            </div>
                            <div  className="misdetails">
                                Save extra with No Cost EMI
                            </div>
                            <div  className="misdetails ">
                                Get it by tomorrow, October 30<br></br> Free Delivery by KMK
                            </div>
                        </div>
                    </div>
                    {/* end */}
                    <hr />
                    {/* 1 */}
                    {/* optional mobile */}
                    {/* <div className="row">
                        <div className="col-3">
                            <img className="img-thumbnail" height="300" width="300" src={img}></img>
                        </div>
                        <div className="col-9">
                            <div><h5>MSI Bravo 15, Ryzen 7 5800H, 15.6" FHD IPS-Level 144Hz Panel Laptop (16GB/512GB NVMe SSD/Windows 10 Home/RX5500M, GDDR6 4GB/Black/2.35Kg), B5DD-077IN (Bravo 15 B5DD-077IN)</h5></div>
                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star "></span>
                                &nbsp;
                                <span className="text-center dropdown-toggle"> </span>&nbsp;132
                            </div>
                            <div><button className="btn btn-warning">Great sale offer</button></div>
                            <div>
                                <b className="text-danger  pricein">$5000</b>
                                <em className="priceout  text-decoration-line-through">$8000</em>
                                <em className="">Save $1548 (18%)</em>
                            </div>
                            <div>
                                Save extra with No Cost EMI
                            </div>
                            <div>
                                Get it by tomorrow, October 30<br></br> Free Delivery by KMK
                            </div>
                        </div>
                    </div> */}
                    {/* end */}
                    <hr />
                    {/* pagination starts */}
                    <hr />
                    <div className="row  paginationcustom"><center>
                        <div aria-label="Page navigation example ">
                            <ul className="pagination d-flex justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </center></div>
                    <hr />
                    {/* pagination ends */}

                </div>
            </div>
        </div>
    )
}

export default Searchresult