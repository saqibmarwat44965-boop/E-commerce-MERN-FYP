import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
});


export const addProduct = async(data) =>{
    try{
        const response = await api.post(`/addproduct`, data);
        console.log(response.status); // Output the HTTP status code
        console.log(response.data); // Output the response data
        return response;
    }catch (error) {
        console.log('Error while calling addProduct Api ' , error)
    }
}

export const getProducts = async() =>{
    try{
        console.log('Success while calling getProducts Api ')
        return await api.get(`/allproducts`)
    }catch (error) {
        console.log('Error while calling getProducts Api ' , error.response)
    }
}

export const getProduct = async(id) =>{
    console.log('Code execution started of getProduct')
    try{
        return await api.get(`/product/${id}`)
    }catch (error) {
        console.log('Error while calling getProduct Api ' , error)
    }
}

export const editProduct = async(product , id) =>{
    try{
        return await api.put(`/product/${id}` , product)
    }catch (error) {
        console.log('Error while calling editProduct Api ' , error)
    }
}

export const deleteProduct = async(id) =>{
    try{
        await api.delete(`/product/${id}`)
    }catch (error) {
        console.log('Error while calling deleteProduct Api ' , error)
    }
}