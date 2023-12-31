import { axiosPrivate } from "../utils/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth, handleUserLogout } = useAuth();

    const logout = async () => {
        handleUserLogout()
        setAuth({});
        try {
            const response = await axiosPrivate.post('/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout