import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
});


export const addProductWishlist = async(data) =>{
    try{
        const response = await api.post(`/addproductwishlist`, data);
        console.log(response.status); // Output the HTTP status code
        console.log(response.data); // Output the response data
        return response;
    }catch (error) {
        console.log('Error while calling addProductWishlist Api ' , error)
    }
}

export const getProductsWishlist = async() =>{
    try{
        console.log('Success while calling getProductWishlists Api ')
        return await api.get(`/allproductswishlist`)
    }catch (error) {
        console.log('Error while calling getProductWishlists Api ' , error.response)
    }
}

export const getProductWishlist = async(id) =>{
    console.log('Code execution started of getProductWishlist')
    try{
        return await api.get(`/productwishlist/${id}`)
    }catch (error) {
        console.log('Error while calling getProductWishlist Api ' , error)
    }
}

export const editProductWishlist = async(productwishlist , id) =>{
    try{
        return await api.put(`/productwishlist/${id}` , productwishlist)
    }catch (error) {
        console.log('Error while calling editProductWishlist Api ' , error)
    }
}

export const deleteProductWishlist = async (id) => {
    try {
      const response = await api.delete(`/productwishlist/${id}`);
      return response.data;
    } catch (error) {
      console.log('Error while calling deleteProductWishlist API:', error);
      throw error;
    }
  };