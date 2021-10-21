import 'bootstrap/dist/css/bootstrap.css';
import './css/footer.css';
import logo from './img/logo.png'
function Footer() {
    return (
        // <!-- Remove the container if you want to extend the Footer to full width. -->
        <div className="container-fluid mt-5 bg-dark p-0">

            {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start text-light" style={{ backgroundcolor: "#1c2331" }}>
                {/* <!-- Section: Social media --> */}
                <section className="py-0 iconrow container-fluid d-flex justify-content-between p-4 bg-warning" style={{ backgroundcolor: '#6351ce' }}>
                    {/* <!-- Left --> */}
                    <div className="my-4">
                        <span className="fs-5 ">Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div className=" iconrow">
                        <a href="" className="footerico mt-4 text-light me-5">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        <a href="" className="footerico text-light me-5">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="" className=" footerico text-light me-5">
                            <i className="fa fa-google"></i>
                        </a>
                        <a href="" className=" footerico text-light me-5">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="" className=" footerico text-light me-5">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="" className=" footerico text-light me-5">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3 bg-dark ">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
                                {/* <!-- Content --> */}
                                <div>
                                    <img src={logo}></img>
                                </div>
                                <hr />
                                <p className="text-align-justify">
                                    Here you can purchase branded spare-parts to customize your vehicle.
                                     Get the best parts with best rate in the market. Wide range of Accesories with 24x7 support and shipping.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <br />
                                <hr />
                                <p>
                                    <a href="#!" className="btn text-white">Tyres</a>
                                </p>
                                <p>
                                    <a href="#!" className="btn text-white">Helmets</a>
                                </p>
                                <p>
                                    <a href="#!" className="btn text-white">Riding Gears</a>
                                </p>
                                <p>
                                    <a href="#!" className="btn text-white">Coolants</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <br />
                                <hr />
                                <p>
                                    <a href="#!" className="btn text-white">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!" className="btn text-white">Affiliate</a>
                                </p>
                                <p>
                                    <a href="#!" className="btn text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="#!" className="btn text-white">Help</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <br />
                                <hr />
                                <a className="btn text-light"><i className="fa fa-home mr-3"></i> Kerala, KL 10012, KL</a>
                                <a className="btn text-light" href="mailto:kmkautomobilescontact@gmail.com"><i className="fa fa-envelope mr-3"></i> contact@kmk.com</a>
                                <a className="btn text-light" href="tel:+9176768788X"><i className="fa fa-phone mr-3"></i> +91 896 589XX89</a>
                                <a className="btn text-light" href="fax:+9176768788X"><i className="fa fa-print mr-3"></i> +91 896 589XX89</a>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div
                    className="text-center p-3"
                    style={{ backgroundcolor: 'red' }}
                >
                    © 2020 Copyright:
                    <b className="text-light" > KMKautomobiles.com</b>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}

        </div>

    )
}
export default Footer