import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom";
import { useState, useEffect } from 'react';


function Chatbox({ socket, username, room }) {

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);
    return (
       
            <div className="col-xl-8 bg-info p-0">
                <div className="chattop">
                    <div className="chatrightname">Ananda krishnan gr</div>
                </div>
                <div className="chatspacer bg-warning">
                    <ScrollToBottom className="chatground">
                            {messageList.map((messageContent) => {
                                return (
                                    <div

                                        className={username === messageContent.author ?  "bcont d-flex flex-row-reverse":"fcont" }
                                    >
                                        <div className={username === messageContent.author ?  "tomes border p-2 m-1 bg-danger":"frommes border  p-2 m-1 bg-success" }>
                                            
                                                {messageContent.message}
                                        
                                            {/* <div className="message-meta">
                                                <p id="time">{messageContent.time}</p>
                                                <p id="author">{messageContent.author}</p>
                                            </div> */}
                                        </div>
                                    </div>
                                );
                            })}

                        
                    </ScrollToBottom>
                  
                        <input className="chatinp" type="text" value={currentMessage}
                            placeholder="Hey..."
                            onChange={(event) => {
                                setCurrentMessage(event.target.value);
                            }}
                            onKeyPress={(event) => {
                                event.key === "Enter" && sendMessage();
                            }}></input><input className="chatsend" onClick={sendMessage} type="button" value="Send"></input>
                  
                </div>
            </div>
      
    )
}

export default Chatbox
