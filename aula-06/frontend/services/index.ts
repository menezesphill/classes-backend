import axios from 'axios';

export const login = async (email: string, password: string, baseURL: string) : Promise<any> => {

    const data = JSON.stringify({
        email: email,
        password: password
    });

    const request: any = {
        method: 'POST',
        url: `${baseURL}/login`,
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        },
        data: data
    };

    const response = await axios(request)
    return response
};

export const register = async () => {};

export const getUserData = async () => {};