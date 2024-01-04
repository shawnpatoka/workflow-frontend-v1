import { axiosPrivate } from '../utils/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axiosPrivate.post('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log("PREVIOUS STATE:", JSON.stringify(prev));
            // console.log("NEW TOKEN", response.data.access);
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.access
            }
        });
        return response.data.access;
    }
    return refresh;
};

export default useRefreshToken;