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

export const register = async (name:string, email: string, password: string, cpf:string, baseURL: string) => {
    const data = JSON.stringify({
        name: name,
        email: email,
        password: password,
        cpf: cpf,
    });

    const request: any = {
        method: 'POST',
        url: `${baseURL}/users/register`,
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        },
        data: data
    }

    const response = await axios(request)
    return response
};

export const getUserData = async (baseURL) => {
    const auth = localStorage.getItem('userToken')

    const request: any = {
        method: 'GET',
        url: `${baseURL}/info`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        maxRedirects: 0,
        data: ''
    }

    const response = await axios(request)
    return response
};