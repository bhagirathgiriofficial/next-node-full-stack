import axios from 'axios';
import { toast } from 'react-toastify';

// Create the axios instance with the base URL
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const showToast = (flag, message) => {
    console.log(flag, message);
    if (flag === 1) {
        toast.success(message);
    } else {
        toast.error(message);
    }
};

const textToSlug = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

export { axiosInstance, showToast, textToSlug };