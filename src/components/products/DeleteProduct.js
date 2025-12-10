import { useState } from 'react';
import { addProduct } from '../../services/api-products';

const defaultValue = {
    name: "",
    productname: "",
    email: "",
    phone: ""
}

const AddProduct = () => {

    const [product , setProduct] = useState(defaultValue);

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const addProductDetails = async() => {
        await addProduct(product);
    }

    return(
        <>
            <p>Hello from AddProduct</p>

            <form>
                <input onChange={(e) => onValueChange(e)} name='name'/>
                <br/>
                <input onChange={(e) => onValueChange(e)} name='productname'/>
                <br/>
                <input onChange={(e) => onValueChange(e)} name='email'/>
                <br/>
                <input onChange={(e) => onValueChange(e)} name='phone'/>
            </form>
        </>
    )

}
export default AddProduct;