import Product from '../schema/product-schema.js';

export const getProducts = async(request, response) => {
    console.log("Code execution started of getProducts");
    try{ 
        console.log('hi');
        const products = await Product.find({});
        console.log('hi');
         response.status(200).json(products);
     } catch (error){
         response.status(404).json({ message: error.message });
     }
}

export const getProduct = async(request, response) => {
    try{

       const product = await Product.findById(request.params.id );
        response.status(200).json(product);
    } catch (error){
        response.status(405).json({ message: error.message });
    }

}

export const deleteProduct = async(request, response) => {
    try{
       await Product.deleteOne({ _id: request.params.id });
       response.status(200).json({message: "Product deleted sucessfully"});
    } catch (error){
        response.status(406).json({ message: error.message });
    }

}
