import ProductWishlist from '../schema/productwishlist-schema.js';


 
export const addProductWishlist = async(request, response) => {
    const productWishlist = request.body;
    const newProductWishlist = new ProductWishlist(productWishlist);
    console.log('adding-to-wishlist-1');
    try{
        await newProductWishlist.save();
        console.log('adding-to-wishlist-2');
        response.status(201).json(newProductWishlist);
    } catch (error){
        console.log('adding-to-wishlist-3');
        response.status(409).json({ message: error.message });
    }

}

export const getProductsWishlist = async(request, response) => {
    console.log("Code execution started of getProductsWishlist");
    try{
        console.log('hi');
        const productsWishlist = await ProductWishlist.find({});
        console.log('hi');
         response.status(200).json(productsWishlist);
     } catch (error){
         response.status(404).json({ message: error.message });
     }
}

export const getProductWishlist = async(request, response) => {
    try{

       const productWishlist = await ProductWishlist.findById(request.params.id );
        response.status(200).json(productWishlist);
    } catch (error){
        response.status(405).json({ message: error.message });
    }

}

export const editProductWishlist = async(request, response) => {
    let productWishlist = request.body;
    
    const editProductWishlist = new ProductWishlist(productWishlist);
    try{
        await ProductWishlist.updateOne({ _id: request.params.id }, editProductWishlist);
        response.status(200).json(editProductWishlist);
    } catch (error){
        response.status(409).json({ message: error.message });
    }

}

export const deleteProductWishlist = async(request, response) => {
    try{
       await ProductWishlist.deleteOne({ _id: request.params.id });
       response.status(200).json({message: "ProductWishlist deleted sucessfully"});
    } catch (error){
        response.status(406).json({ message: error.message });
    }

}
