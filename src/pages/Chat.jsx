import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getUserAPI,getAllMessagesAPI,sendMessageAPI} from "../services/allApi";
import { IoSendSharp } from "react-icons/io5";

function Chat() {
    // chat
  const [newMessage, setNewMessage] = useState("")

  const { id } = useParams()

  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState([])

  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  )

  useEffect(() => {
  getUser();
  getMessages();
}, [id]);

  const getUser = async () => {
    try {
      const response = await getUserAPI(id)
      setUser(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  const getMessages = async () => {
    try {
      const response = await getAllMessagesAPI()
      const chatMessages = response.data.filter(
        (message) =>
          (message.senderId === loggedInUser?.id && message.receiverId === Number(id)) ||
          (message.senderId === Number(id) && message.receiverId === loggedInUser?.id)
      )
      setMessages(chatMessages);
    } catch (err) {
      console.log(err);
    }
  }

  if (!user) {
    return <h3>Loading...</h3>
  }

//   chat fn
const handleSendMessage = async () => {
  if (!newMessage.trim()) {
    return
  }
  const messageDetails = {
    senderId: loggedInUser.id,
    receiverId: Number(id),
    message: newMessage,
    timestamp: new Date().toISOString()
  }
  try {
    const response = await sendMessageAPI(messageDetails)
    setMessages((prevMessages) => [...prevMessages,response.data])
    setNewMessage("")
  } catch (err) {
    console.log(err)
    alert("Failed to send message!")
  }
}

  return (
    <div className="container mt-4 text-light">
      <h2 className="text-center">Chat with {user.name}</h2>
      <div className="container-sm mt-4 p-3 rounded"style={{backgroundColor: "rgba(10, 10, 12, 0.85)",minHeight: "400px",maxWidth:'600px'}}>
        {messages.length === 0 ? (<p className="text-center mt-5">No messages yet. Start the conversation!</p>) 
                  :(messages.map((message) => (
            <div key={message.id} className={message.senderId === loggedInUser?.id? "text-end mb-3": "text-start mb-3"}>
              <span className="badge bg-primary p-2">{message.message}</span>
            </div>
          ))
        )}
        {/* chatbox */}
  <div className="d-flex mt-3 gap-2">
  <input type="text"className="form-control"placeholder="Type a message..."value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSendMessage();
      }}}
  />
  <button className="btn btn-primary mb-0"onClick={handleSendMessage}>< IoSendSharp/></button>
</div>
      </div>
    </div>
    
  )
}

export default Chat