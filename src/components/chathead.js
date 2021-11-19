
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/chathead.css';


// function keepopen() {
//   var stat = document.getElementById("chatpop")
//   stat.classList.add('')

// }
function openchat() {
  var status = document.getElementById("chatpop");
  status.classList.toggle("chatpoped")
  // var statusbtn = document.getElementById("clsbtn");
  // statusbtn.classList.toggle('showit')

  var statusfrm = document.getElementById("frmchat");
  statusfrm.classList.toggle('frmchat2')
}
function Chathead() {

  return (
    <div>




      <div id="sps" >
        <div className="chatbox">
          {/* ☰ */}
          <div className="chatheader"><b className="chatheadername mt-4 text-light bg-dark"> Support  </b>
          <button id="clsbtn" className="openbtns float-end " onclick="openDropdown(this)"onClick={() => openchat()}>X</button></div>
        </div>
        <div  >
          <div id="chatpop" className="chatpop chatspace">

            <div className="chatfrom m-1">sdsd</div>
            <div className="chatto m-1 float-end"> th appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
              Line 61:69:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
            </div>
          </div>
          <div id="frmchat" className="frmchat">
            <form>
              <input placeholder="Need help ?" className="w-100 searchbox "></input>
              <input type="button" className="searchbtn " value="Send" />
            </form>
          </div>

        </div>
      </div>


      <div id="main"></div>
    </div>
  )

}
export default Chathead