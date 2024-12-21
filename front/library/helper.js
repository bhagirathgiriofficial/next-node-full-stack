import axios from 'axios';
import { toast } from 'react-toastify';

// Create the axios instance with the base URL
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const showToast = (flag, message) => {
    console.log(flag,message)
    toast({ type: flag ? 'sucess' : 'error', message: message });
}

export { axiosInstance, showToast };