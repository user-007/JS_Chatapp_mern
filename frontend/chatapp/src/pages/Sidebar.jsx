import {useEffect} from "react"
import {useChafStore} from "../store/useChatStore";
import Sidebar from "../skeletons/SidebarSkeleton";
import {Users} from "lucide-react";

const Sidebar = () => {
    const{getUsers,users,selectedUser,setSelectedUser, isUsersLoading} = useChafStore();
}
// useAuthStore=
