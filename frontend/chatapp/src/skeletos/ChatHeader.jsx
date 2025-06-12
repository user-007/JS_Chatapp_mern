const ChatContainer = () => {
    const {messages, getMessages, isMessagesLoading, selectedUser} = useChatStore;

    useEffect(() =>{
        getMessages(selectedUser._id);
    }, [selectedUser._id, getMessages])
}

if(isMessageLoading) return <div>Loading...</div>


    //if(isMessages Loading) return <div>Loading...</div>

