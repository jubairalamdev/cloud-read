import { toast } from "react-toastify";
import { authClient } from "../auth-client";

export const registerUser = async (formData) => {
    const auth_name = "Register"
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        image: user.photoUrl,
        callbackURL: "/login",
    });

    if(error){
        toast.error("There was a Server Error")
    }
    if(data){
        toast.success(`${auth_name} Successful`)
    }
    console.log("DATA: ", data, "ERROR: ", error)
} 