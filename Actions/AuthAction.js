import { LOGIN, LOGOUT } from './Constant';
import { UserLogin } from '../Service/ApiService';

export const SignIn = (Credentials, encodedCredentials) => async (dispatch) => {

    try {
        const { data, status } = await UserLogin(Credentials);
        console.log(status)

    } catch (error) {
        if (error?.response) {
            
        }
    }
};