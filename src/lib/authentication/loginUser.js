import { toast } from "react-toastify";
import { authClient } from "../auth-client";

export const loginUser = async (formData) => {
    const auth_name = "Login"
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
        rememberMe: true,
        callbackURL: "/"
    });
    if (error) {
        toast.error("There was a Server Error")
    }
    if (data) {
        toast.success(`${auth_name} Successful`)
    }
    console.log("DATA: ", data, "ERROR: ", error)
}