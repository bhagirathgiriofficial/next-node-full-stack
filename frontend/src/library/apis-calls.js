const { axiosInstance } = require("./helper")

const getCategories = () => {
    return axiosInstance
        .get(process.env.NEXT_PUBLIC_CATEGORY_URL) // Full URL will be "http://localhost:5500/category"
        .then((response) => {
            return response.data; // Optionally return data for further use
        })
        .catch((error) => {
            console.error('Error:', error.message);
            return []; // Optionally return default value
        });
}

export { getCategories }