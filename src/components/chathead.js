
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/chathead.css';


function
  closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

}
function openchat() {
  var status = document.getElementById("chatpop");
  status.classList.toggle("chatpoped")

}
function Chathead() {

  return (
    <div>




      <div id="sps">
        <div className="chatbox">

          <div className="chatheader"><b className="chatheadername mt-4"> Support  </b><button id="" className="openbtns float-end" onClick={() => openchat()}>☰</button></div>
        </div>

        <div id="chatpop" className="chatspace chatpop">

          <div className="chatfrom m-1">sdsd</div>
          <div className="chatto m-1 float-end"> th appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
            Line 61:69:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
          </div>
        </div>
        <form>
          <input onBlur={() => openchat()} onFocus={() => openchat()} placeholder="Need help ?" className="w-100 searchbox"></input>
          <input className="searchbtn btn" value="Send" />
        </form>
      </div>


      <div id="main"></div>
    </div>
  )

}
export default Chathead