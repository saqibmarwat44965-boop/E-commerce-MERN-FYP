import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
});


export const addProductCart = async(data) =>{
    try{
        const response = await api.post(`/addproductcart`, data);
        console.log(response.status); // Output the HTTP status code
        console.log(response.data); // Output the response data
        return response;
    }catch (error) {
        console.log('Error while calling addProductCart Api ' , error)
    }
}

export const getProductsCart = async() =>{
    try{
        console.log('Success while calling getProductCarts Api ')
        return await api.get(`/allproductscart`)
    }catch (error) {
        console.log('Error while calling getProductCarts Api ' , error.response)
    }
}

export const getProductCart = async(id) =>{
    console.log('Code execution started of getProductCart')
    try{
        return await api.get(`/productcart/${id}`)
    }catch (error) {
        console.log('Error while calling getProductCart Api ' , error)
    }
}

export const editProductCart = async(productcart , id) =>{
    try{
        return await api.put(`/productcart/${id}` , productcart)
    }catch (error) {
        console.log('Error while calling editProductCart Api ' , error)
    }
}

export const deleteProductCart = async(id) =>{
    try{
        await api.delete(`/productcart/${id}`)
    }catch (error) {
        console.log('Error while calling deleteProductCart Api ' , error)
    }
}