import MessageInput from "../components/MessageInput.jsx";

const ChatContainer = () => {
    const {messages,getMessages, isMessagesLoading, selectedUser} = userChatStore();
    return <div>ChatContainer</div>
    if(isMessagesLoading) return <div>Loading..</div>

    useEffect(()=> {
        getMessages(selectedUser._id)
    },[selectedUser._id,getMessages])
        if(isMessagesLoading) return <div>Loading...</div>
        return <div>ChatContainer</div>;
    return (
        <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader/>
            <p>messages...</p>
            <MessageInput/>

    </div>
    )
};
export default ChatContainer;
