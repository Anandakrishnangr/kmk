import './App.css'
import { Route, Link } from 'react-router-dom'
import Header from './components/header'
import Productview from './components/productview'
import Searchresult from './components/searchresult';
import Signin from './components/signin';
import Signup from './components/signup';
import Verifyemail from './components/verifyemail';
import Footer from './components/footer';
import SellerSignup from './components/sellerregister';
import SellerDash from './components/sellerdashboard';
import Chathead from './components/chathead'
import { Addproduct } from './components/addproduct';
import { Testlink } from './components/testlink';
import { Home } from './components/home';
import AdminDash from './components/admindash';
import { Customerchat } from './components/customerchat';
import { Chat } from './components/chat'
import Response from './components/response';
function App() {
  // const product = <Header/>
  return (


    <div className="App">

      {/* <Addproduct/> */}
      <Chathead />
      {/* <SellerDash/> */}
      <Route path='/Customerchat' >
        <AdminDash />
        <Customerchat />
      </Route>
      <Testlink />
      <>
        <Route path='/home' >
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route component={Chat} path='/chat' />
        <Route component={Response} path='/response' />
        <Route component={Verifyemail} path='/verifyemail' />


        <Route component={AdminDash} path='/admindash' />
        <Route component={SellerSignup} path='/sellersignup' />

        <Route component={SellerDash} path='/sellerhome' />
        <Route component={Addproduct} path='/addproduct' />
        <Route component={Signin} path='/signin' />
        <Route component={Signup} path='/signup' />
        <Route path='/productview' >
          <Header />
          <Productview />
          <Footer />
        </Route>
        <Route path='/products' >
          <Header />
          <Searchresult />
          <Footer />
        </Route>
      </>
      {/* <Header /> */}
      {/* <Searchresult/> */}
      {/* <Footer/> */}
      {/* <Verifyemail /> */}
      {/* <Productview/> */}

    </div>
  );
}

export default App;
