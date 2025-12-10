import { useState, useEffect } from 'react';
import { editProduct, getProduct } from '../../services/api-products';
import { useNavigate, useParams } from 'react-router-dom';

import HeaderTop from '../cart-sub-components/HeaderTop';
import HeaderCenter from '../cart-sub-components/HeaderCenter';
import HeaderBottom from '../cart-sub-components/HeaderBottom';
import Footer from '../cart-sub-components/Footer';
import "./styles/AddProduct.css";

const defaultValue = {
    productname: "",
    category: "",
    status: "",
    discount: "",
    title: "",
    color: "",
    brand: "",
    materials: "",
    style: "",
    price: "",
    img: ""
}

const EditProduct = () => {

    const navigate = useNavigate();

    const role = localStorage.getItem('role');

    const adminEmail = localStorage.getItem('email');
    console.log(adminEmail)
    useEffect(() => {
        if (adminEmail === 'saqibmarwat44965@gmail.com' || role === 'seller') {
            
        } else {
        navigate('/loginuser');
        }
    }, [adminEmail, navigate]);

    const [product , setProduct] = useState(defaultValue);

    const { id } = useParams();

    useEffect( () =>{
        loadProductDetails();
    }, [])

    const loadProductDetails= async() => {

        const response = await getProduct(id);
        console.log(id)
        setProduct(response.data);

    }
 
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProduct({ ...product, img: file });
    };

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const editProductDetails = async() => {
        try {
            const formData = new FormData();
            formData.append("productname", product.productname);
            formData.append("category", product.category);
            formData.append("status", product.status);
            formData.append("discount", product.discount);
            formData.append("title", product.title);
            formData.append("color", product.color);
            formData.append("brand", product.brand);
            formData.append("materials", product.materials);
            formData.append("style", product.style);
            formData.append("price", product.price);
            formData.append("img", product.img);
            formData.append("productUploader", product.productUploader);
      
            await editProduct(formData , id);
          } catch (error) {
            console.log('Error while adding product: ', error);
          }
        if(role === 'seller'){
            navigate('/userprofile')
        }else(
            navigate('/admin-panel')
        )
        
    }

    
    //Validation

    const validate = () =>
		{
		
			let addproduct_message_productname = document.querySelector('.addproduct-message-productname');
			let addproduct_message_email = document.querySelector('.addproduct-message-email');
			let addproduct_message_password = document.querySelector('.addproduct-message-password');
			let addproduct_message_confirm_password = document.querySelector('.addproduct-message-confirm-password');

			if(product.productname.trim().length < 3)
			{
			
				addproduct_message_productname.innerHTML = 'Please enter a valid productname!';
				return false;
			
			}
			else if(product.email.indexOf('@') < 3 ||
            product.email.lastIndexOf ('.') < 7 )
			{
			
                addproduct_message_productname.style.display = 'none';
				addproduct_message_email.innerHTML = 'invalid E-mail!';
				return false;
			
			}
			else if(product.password.trim().length < 8 ||
            product.password.trim().length > 50)
			{
                addproduct_message_email.style.display = 'none';
				addproduct_message_password.innerHTML = 'invalid Password!';
				return false;
				
			}//else if(product.password != product.confirm){
              //  addproduct_message_password.style.display = 'none';
				//addproduct_message_confirm_password.innerHTML = 'Please Confirm Password!';
				//return false;
           // }
            else
            {
                addproduct_message_confirm_password.style.display = 'none';
                editProductDetails();
            }

            return false;
		}

         //Validation


    return(
        <>
            <HeaderTop />
            <HeaderCenter />
            <HeaderBottom />
            
            <div className='addproduct-form addproductform'>
                <h1>EditProduct</h1>
                <form>
                <label htmlFor='productname' className='addproduct-fields-discription'>productname*</label>
                <span className='addproduct-message-productname'></span>
                <input onChange={(e) => onValueChange(e)} name='productname' className='addproduct-fields-text' value={product.productname}/>
                <br/>
                
                <label htmlFor='category' className='addproduct-fields-discription'>category*</label>
                <span className='addproduct-message-category'></span>
                <input onChange={(e) => onValueChange(e)} name='category' className='addproduct-fields-text' value={product.category}/>
                <br/>
                
                <label htmlFor='status' className='addproduct-fields-discription'>status*</label>
                <span className='addproduct-message-status'></span>
                <input onChange={(e) => onValueChange(e)} name='status' className='addproduct-fields-text'value={product.status}/>
                <br/>

                <label htmlFor='discount' className='addproduct-fields-discription'>discount*</label>
                <span className='addproduct-message-discount'></span>
                <input onChange={(e) => onValueChange(e)} name='discount' className='addproduct-fields-text'value={product.discount}/>
                <br/>

                <label htmlFor='title' className='addproduct-fields-discription'>title*</label>
                <span className='addproduct-message-title'></span>
                <input onChange={(e) => onValueChange(e)} name='title' className='addproduct-fields-text'value={product.title}/>
                <br/>

                <label htmlFor='color' className='addproduct-fields-discription'>color*</label>
                <span className='addproduct-message-color'></span>
                <input onChange={(e) => onValueChange(e)} name='color' className='addproduct-fields-text'value={product.color}/>
                <br/>

                <label htmlFor='brand' className='addproduct-fields-discription'>brand*</label>
                <span className='addproduct-message-brand'></span>
                <input onChange={(e) => onValueChange(e)} name='brand' className='addproduct-fields-text'value={product.brand}/>
                <br/>

                <label htmlFor='materials' className='addproduct-fields-discription'>materials*</label>
                <span className='addproduct-message-materials'></span>
                <input onChange={(e) => onValueChange(e)} name='materials' className='addproduct-fields-text'value={product.materials}/>
                <br/>

                <label htmlFor='style' className='addproduct-fields-discription'>style*</label>
                <span className='addproduct-message-style'></span>
                <input onChange={(e) => onValueChange(e)} name='style' className='addproduct-fields-text'value={product.style}/>
                <br/>
                
                <label htmlFor='price' className='addproduct-fields-discription'>price*</label>
                <span className='addproduct-message-price'></span>
                <input onChange={(e) => onValueChange(e)} name='price' className='addproduct-fields-text'value={product.price}/>
                <br/>

                <label htmlFor='img' className='addproduct-fields-discription'>img*</label>
                <span className='addproduct-message-price'></span>
                <input onChange={(e) => handleFileChange(e)} name='img' className='addproduct-fields-text'type='file'/>
                <br/>
                    <br/>
                    <input type='button' onClick={editProductDetails} value='Edit' className='addproduct-button'/>
                </form>
            </div>

            <Footer />
        </>
    )

}
export default EditProduct;