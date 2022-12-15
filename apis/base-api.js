import axios, { Method } from 'axios';
import { APP_API_URL } from '../configs/config';


export const request = async (method, url, data, formData)  => {
    let fullUrl = APP_API_URL + url;
    
    let realMethod = method.toUpperCase();
    if(['GET', 'DELETE'].includes(realMethod)) {
        fullUrl = dataToParams(fullUrl, data);
    }

    let configs = {
        method: method,
        url: fullUrl,
        data: realMethod === 'POST' ? data : {},
        headers: { }
    };

    if(formData){
        let bodyFormData = new FormData();
        bodyFormData.append('image', data); 
        configs = {
            method: method,
            url: fullUrl,
            data: bodyFormData,
            headers: {
                Authorization: 'Bearer ' + accessToken,
                ContentType: "multipart/form-data"
            }
        };
    }

    try {
        const request = await axios.request(configs);
        return request.data;
    } catch(error) {
        if(error.response) {
            return error.response.data;
        }   
    }
}

const dataToParams = (url, data) => {
    let str = '';
    if(Object.keys(data).length > 0) {
        str = Object.keys(data).map(function(key) {
            return key + '=' + data[key];
        }).join('&');
    }
    
    return url + str;
}
