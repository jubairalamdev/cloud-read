import { authClient } from "@/lib/auth-client"
import { toast } from "react-toastify";

export const updateSession = async (formData) => {
    const action = "Profile Update"

    try {
        const user = Object.fromEntries(formData.entries());
        await authClient.updateUser({
            name: user.name,
            image: user.photoUrl,
        });
        toast.success(`${action} Successful`)
    }
    catch (error) {
        toast.error("There was a Server Error")
    }
}