import {create} from "zustand"
import toast from "react-hot-toast"
import {axiosInstance} from "../lib/axios";

export const useChatStore = (set, get) => create({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,
    getUsers: async(userId) =>{

    },
    getMessages: async (userId) =>{

    },
    setMessages: async(messageData) =>{
        const {selectedUser, messages} = messageData;
        try{
            //@To do complete
            const res;
        } catch(error){}
    },
    setSelectedUser: (selectedUser) => set({selectedUser}),
})