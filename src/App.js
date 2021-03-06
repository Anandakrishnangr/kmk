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
function App() {
  // const product = <Header/>
  return (

  
    <div className="App">
<Chathead/>
{/* <SellerDash/> */}


      <>
        <Route component={Signin} path='/signin' />
        <Route component={Signup} path='/signup' />
        <Route  path='/productview' >
          <Header/>
          <Productview/>
          <Footer/>
        </Route>
        <Route  path='/products' >
        <Header/>
        <Searchresult/>
        <Footer/>
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
