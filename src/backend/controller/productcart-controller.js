import ProductCart from '../schema/productcart-schema.js';


 
export const addProductCart = async(request, response) => {
    const productCart = request.body;
    const newProductCart = new ProductCart(productCart);
    console.log('adding-to-cart-1');
    try{
        await newProductCart.save();
        console.log('adding-to-cart-2');
        response.status(201).json(newProductCart);
    } catch (error){
        console.log('adding-to-cart-3');
        response.status(409).json({ message: error.message });
    }

}

export const getProductsCart = async(request, response) => {
    console.log("Code execution started of getProductsCart");
    try{
        console.log('hi');
        const productsCart = await ProductCart.find({});
        console.log('hi');
         response.status(200).json(productsCart);
     } catch (error){
         response.status(404).json({ message: error.message });
     }
}

export const getProductCart = async(request, response) => {
    try{

       const productCart = await ProductCart.findById(request.params.id );
        response.status(200).json(productCart);
    } catch (error){
        response.status(405).json({ message: error.message });
    }

}

export const editProductCart = async(request, response) => {
    let productCart = request.body;
    
    const editProductCart = new ProductCart(productCart);
    try{
        await ProductCart.updateOne({ _id: request.params.id }, editProductCart);
        response.status(200).json(editProductCart);
    } catch (error){
        response.status(409).json({ message: error.message });
    }

}

export const deleteProductCart = async(request, response) => {
    try{
       await ProductCart.deleteOne({ _id: request.params.id });
       response.status(200).json({message: "ProductCart deleted sucessfully"});
    } catch (error){
        response.status(406).json({ message: error.message });
    }

}
