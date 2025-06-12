import {useAuthStore} from "../store/userAuthStore.js";
import {Camera} from "lucide-react"
const ProfilePage = () =>{
    const {authUser, isUpdatingProfile} = useAuthStore()

    const handleImageUpload = async(e) =>{
        const file = e.target.files[0];

    }
    return (
    <div className="h-screen pt-20">
        <div className="max-w-2xt mx-auto p-4 py-8">
            <div className="bg-base-300 rounded-xl p-6 space-y-8"
        </div>
    </div>
    )
};
export default ProfilePage;
