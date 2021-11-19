import './css/customerchat.css';
import avatar from './img/dm-profile.jpg'
import io from "socket.io-client";
import { useState, useEffect } from 'react';
import Chatbox from './chatbox'
const socket = io.connect("http://localhost:3001");

export const Chat = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = (roome, user) => {

        setUsername(user)
        setRoom(roome)
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };
    return (
        <div className="pt-5">
            <div className="pt-5 container  text-light">
                <div className="row text-align-center">CUSTOMER CHAT</div>

                <div className="row">

                    <div className="col-xl-4">
                        <div className="recenttop ps-2">
                            Chat history
                        </div>
                        <div className="tileschat">
                            <div className="chatlink" onClick={() => joinRoom('ak', 'Ak')}>
                                <div className="border chatprofile">
                                    <div className="row">
                                        <div className="col-2 ps-2">
                                            <div className="avatarcontainer bg-success"><img className="avatar" src={avatar} /></div>
                                        </div>
                                        <div className="col-10 bg-info rightbox">
                                            <div className="row">
                                                <div className="col-9 names">Ananda krishnan gr</div>
                                                <div className="col-3 times">Yesterday <div>10.20 pm</div></div>
                                            </div>
                                            <div className="row message">
                                                Hello world  Hello world  Hello world  Hello world  Hello world  Hello world
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="chatlink" onClick={() => joinRoom('ak', 'Dk')}>
                                <div className="border chatprofile">
                                    <div className="row">
                                        <div className="col-2 ps-2">
                                            <div className="avatarcontainer bg-danger"><img className="avatar" src={avatar} /></div>
                                        </div>
                                        <div className="col-10 bg-info rightbox">
                                            <div className="row">
                                                <div className="col-9 names">Ananda krishnan gr</div>
                                                <div className="col-3 times">Yesterday <div>10.20 pm</div></div>
                                            </div>
                                            <div className="row message">
                                                Hello world  Hello world  Hello world  Hello world  Hello world  Hello world
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="chatlink" onClick={() => joinRoom('kk', 'pk')}>
                                <div className="border chatprofile">
                                    <div className="row">
                                        <div className="col-2 ps-2">
                                            <div className="avatarcontainer bg-danger"><img className="avatar" src={avatar} /></div>
                                        </div>
                                        <div className="col-10 bg-info rightbox">
                                            <div className="row">
                                                <div className="col-9 names">Ananda krishnan gr</div>
                                                <div className="col-3 times">Yesterday <div>10.20 pm</div></div>
                                            </div>
                                            <div className="row message">
                                                Hello world  Hello world  Hello world  Hello world  Hello world  Hello world
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="border chatprofile">
                                <div className="row">
                                    <div className="col-2 ps-2">
                                        <div className="avatarcontainer bg-danger"><img className="avatar" src={avatar} /></div>
                                    </div>
                                    <div className="col-10 bg-info rightbox">
                                        <div className="row">
                                            <div className="col-9 names">Ananda krishnan gr</div>
                                            <div className="col-3 times">Yesterday <div>10.20 pm</div></div>
                                        </div>
                                        <div className="row message">
                                            Hello world  Hello world  Hello world  Hello world  Hello world  Hello world
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {!showChat ? (
                        <div className="joinChatContainer">
                            <h3>Join A Chat</h3>
                            <input
                                type="text"
                                placeholder="John..."
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Room ID..."
                                onChange={(event) => {
                                    setRoom(event.target.value);
                                }}
                            />
                            <button onClick={joinRoom}>Join A Room</button>
                        </div>
                    ) : (
                        <Chatbox socket={socket} username={username} room={room} />
                    )}
                </div>
            </div>
        </div>
    )

}
