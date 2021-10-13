import React, { Component } from 'react'
import './css/header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap'
import logo from './img/logo.png'

import 'font-awesome/css/font-awesome.min.css';
import { WindowSidebar } from 'react-bootstrap-icons';
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ''

    }
  }
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  }
  openNav1() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";

  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

  }

  componentDidMount() {


    //   window.addEventListener('scroll', function(){

    //     function isInViewport(element) {
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }
    // const box = document.querySelector('.mobilefloatnav');

    // this.result = isInViewport(box);
    // if(this.result){
    //   document.getElementById('mobilefloatnav2').style.display='none';
    //   document.getElementById('mobilefloatnav').style.display='inline';
    // }
    // else{
    //   document.getElementById('mobilefloatnav').style.display='none';
    //   document.getElementById('mobilefloatnav2').style.display='block';
    //   document.getElementById('mobilefloatnav2').style.position='fixed';
    // }

    // })
 

    var lastScrolTop = 0;
    var navbar = document.getElementById("mobilefloatnav2");
    var realnavbar = document.getElementById("mobilefloatnav");
    var mainid  = document.getElementById("mainid");
    var main = document.getElementById("main");
    window.addEventListener("scroll", function () {

      if(window.innerWidth<480){
      var scrollTop = window.pageYoffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrolTop) {

        navbar.style.display = "block";
        realnavbar.style.display = "none";
        navbar.style.top = "0px";
        navbar.style.position = "fixed";
        // main.style.backgroundColor="transparent";
        main.style.height="10px";

      }
      else {
        main.style.height="100px";
        // main.style.backgroundColor="dark";
        navbar.style.display = "none";
        realnavbar.style.display = "block";

      }
    }
    else{
      navbar.style.display = "none";
    }
    })


  
  }








  render() {


    // const inputbox = "max-width:300px";
    return (
      <div className="allheader">
        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" id="cls" className="closebtn" onClick={() => this.closeNav()}>X</a>
          {/* fix me ^ */}
          <div className="sidebarminiheading">Trending Content</div>
          <a href="about.html">About</a>
          <a href="sd.html">Best Sellers</a>
          <a href="sd.html">New Releases</a>
          <a href="sd.html">Movers and Shakers</a>
          <div className="sidebarminiheading">Digital os here Content</div>
          <a href="about.html">Alexa</a>
          <a href="sd.html">Prime</a>
          <a href="sd.html">New Releases</a>
          <a href="sd.html">Movers and Shakes</a>

        </div>


        <div id="main" className="mainid bg-dark">
          {/* nav start */}
          <>

            {/* <Container className="m-0 navmain" > */}
            {/* realnav */}

            <div id="navbar" className="realnav w-100">
              <Navbar className="p-0 my-0 navi " bg="dark" variant="dark">
                <Navbar.Brand href="#home" className="navbrandh nav-1 p-1 m-1 p-0 m-0"><img src={logo} alt="logo" height="30px" width="130px"></img></Navbar.Brand>

                <Nav className="w-100 ">
                  <Nav.Link href="#home" className="navbrandh p-1 m-2 nav-2">
                    Hello user<br /><i className="fa fa-map-marker" aria-hidden="true"></i><div className="line3">Select your address</div>
                  </Nav.Link>
                  <Nav.Link className="m-2 m-0 p-1 p-0 headersearchbox nav-3" href="#home">
                    <form className="example" action="/action_page.php" >
                      <select className="form-control">
                        <option>All</option>
                      </select>
                      <input type="text" className=" w-6 form-control " placeholder="Search.." name="search2"></input>
                      <button type="submit"><i className="fa fa-search "></i></button>
                    </form>
                  </Nav.Link>
                  <Nav.Link className="m-3 p-1 nav-4" href="#features"><div className="line1">Hello, Sign in</div><div className="line2">Account & Links</div>

                  </Nav.Link>
                  <Nav.Link className="m-3 p-1 nav-5" href="#pricing"><div className="line1">Returns &</div><div className="line2">

                    Orders</div></Nav.Link>
                  <Nav.Link className="m-3 p-1 nav-6" href="#pricing"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>Cart</Nav.Link>
                </Nav>
              </Navbar>
            </div>


            {/* mobile nav */}


            <div className="mobilenav">
              <Navbar className="p-0 my-0 navi " bg="dark" variant="dark">
                <div id="sp">
                  <button id="doit" className="openbtn" onClick={() => this.openNav1()}>☰</button>
                </div>
                <Navbar.Brand href="#home" className="navbrandh nav-1 p-0 m-0"><img src={logo} alt="logo" height="30px" width="130px"></img></Navbar.Brand>
                <Nav className="w-100 m-0 justify-content-end ">
                  <Nav.Link className="m-2 p-1 nav-4 " href="#features"><div className="line1">Sign in<i className="fa  fa-user fa-2x" aria-hidden="true"></i> </div>
                    {/* <div className="line2">Account & Links</div> */}
                  </Nav.Link>
                  <Nav.Link className="m-1 p-1 nav-6" href="#pricing"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></Nav.Link>
                </Nav>
              </Navbar>

            </div>
            <div id="mobilefloatnav" className="mobilefloatnav">
              <Navbar className="p-0 my-0 navis " bg="dark" variant="dark">
                <Nav className="w-100 m-0">
                  <Nav.Link className="m-0 p-0 headersearchbox nav-3" href="#home">
                    <form className="example" action="/action_page.php" >
                      <select className="form-control">
                        <option>All</option>
                      </select>
                      <input type="text" className=" w-6 form-control " placeholder="Search.." name="search2"></input>
                      <button type="submit"><i className="fa fa-search "></i></button>
                    </form>
                  </Nav.Link>
                </Nav>
              </Navbar>
            </div>
            {/* floating */}
            <div id="mobilefloatnav2" className="mobilefloatnav2">
              <Navbar className="p-0 my-0  " bg="dark" variant="dark">
                <Nav className="w-100 m-0">
                  <Nav.Link className="m-0 p-0  nav-3-float" href="#home">
                    <form className="examplee" action="/action_page.php" >
                    <button id="doit" type="button" className="openbtn" onClick={() => this.openNav1()}>☰</button>
                      <input type="text" className=" w-4 form-control " placeholder="Search.." name="search2"></input>
                      <button type="submit"><i className="fa fa-search "></i></button>
                      <button className="opnbtn nav-6-float" href="#pricing"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></button>

                    </form>
                  </Nav.Link>
                </Nav>
              </Navbar>
            </div>

            {/* </Container> */}


          </>
          {/* nav end */}

        </div>
        <div className="main"></div>
        <div id="s">
          <button id="doit" className="openbtn" onClick={() => this.openNav()}>☰</button>
          <a href="des" className="secondbutton ">Cars</a>
          <a href="des" className="secondbutton ">Bikes</a>
          <a href="des" className="secondbutton ">Tyres</a>
          <a href="des" className="secondbutton ">Tools</a>
          <a href="des" className="secondbutton ">Shampoo</a>
          <a href="des" className="secondbutton ">Cleaner</a>
          <a href="des" className="secondbutton ">Helmet</a>
          <a href="des" className="secondbutton ">Engine Oil</a>
          <a href="des" className="secondbutton ">Spare </a>
          <a href="des" className="secondbutton ">Mirror</a>
        </div>

        <div className="content">
          {this.result ? <h3>Sticky Navigation Example</h3> : <h3>Sticky Navigation ssExampleSticky Navigation Example</h3>}
        </div>
        <div className="content">
          <h3>Sticky Navigation Example</h3>
          <p>The navbar will stick to the top when you reach its scroll position.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        </div>
        <div className="content">
          <h3>Sticky Navigation Example</h3>
          <p>The navbar will stick to the top when you reach its scroll position.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        </div>
      </div>

    )
  }
}

export default Header