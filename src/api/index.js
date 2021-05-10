import axios from 'axios';

const URL = "http://"; // Will be completed on finishing server side implemetnation;

const axiosInstance = axios.create({
    baseURL: URL
})
const buildQueryParams = (params = {}) => {
    const queryParams = [];
    Object.entries(params).forEach(([key, value]) => {
        queryParams.push(`${key}=${value}`);
    })
    return queryParams.join("&");
}
export const fetchPets = async (params = {}) => {
    const queryParams = buildQueryParams(params);
    const response = await axiosInstance.get(`pets /${Object.keys(params).length ? `?${queryParams}` : ""}}`);
    return response.data;
}

export const getTypesByAnimal = async (animalType) => {
    const response = await axiosInstance.get(`animalTypes / ${animalType} `);
    return response.data;

}