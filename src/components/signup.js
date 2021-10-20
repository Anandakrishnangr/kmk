import { InputGroup } from 'react-bootstrap'
import logo from './img/logo.png'
function Signup() {

    return (
        <div>
            <div className="container bg-warning col-2">
                <center>  <img src={logo}></img></center>
                </div>
            <div className="container col-2">
                <form className="justify-content-center">
                    Email or mobile phone number<br></br><input type="text" name="usname"></input>
                </form>
            </div>
            
        </div>
    )
}
export default Signup