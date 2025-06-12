import {useEffect} from "react";


import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

const ChatContainer = () => {
    const {messages, getMessages, isMessagesLoading, selectedUser} = useChatStore();
}
useEffect(() => {
    getMessages(selectedUser._id);
}, [selected._id,getMessages]);

if(isMessagesLoading) return( <div>Loading...</div>
// <div className = "flex-1 flex flex-col overflow-auto">
//     </ChatHeader>
//     <MessageInput/>
// </div>

)

return (
    <div className="flex=1 flex flex-col overflow-auto">
        <chatHeader />
        <p>messages...</p>
        <MessageInput />
    </div>
)
//