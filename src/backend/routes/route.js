import express from "express";
import authenticateUser from './../authenticateUser.js';

import { addUser , getUsers , getUser , editUser , deleteUser , loginUser } from './../controller/user-controller.js';
import { getProducts , getProduct , deleteProduct } from './../controller/product-controller.js';
import { addProductCart , getProductsCart , getProductCart , editProductCart , deleteProductCart } from './../controller/productcart-controller.js';
import { addProductWishlist , getProductsWishlist , getProductWishlist , editProductWishlist , deleteProductWishlist } from './../controller/productwishlist-controller.js';
import path from 'path';
import { v4 as uuidv4 } from 'uuid'; // For generating unique filenames
import fs from 'fs';
import Product from './../schema/product-schema.js';

const router = express.Router(); 

const saveProductImage = (file) => {
    const uniqueFilename = `${uuidv4()}${path.extname(file.name)}`;
    const filePath = path.join('public', 'product-images', uniqueFilename);
  
    return new Promise((resolve, reject) => {
      file.mv(filePath, (err) => {
        if (err) {
          console.log('Error while uploading Product images:', err);
          reject(err);
        } else {
          resolve(uniqueFilename); // Return only the filename without the path
        }
      });
    });
  };
  
  router.post('/addproduct', async (req, res) => {
    try {
      // If a file is uploaded, save the profile picture and get the filename
      let filename;
      if (req.files && req.files.img) {
        filename = await saveProductImage(req.files.img);
      }
  
      const product = req.body;
      
      // Set the profilePicture field in the user object with the filename
      if (filename) {
        product.img = filename;
      }
  
      const newProduct = new Product(product);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.log('Error while adding product: ', error);
      res.status(409).json({ message: error.message });
    }
  });

router.get('/allproducts', getProducts);
router.get('/product/:id', getProduct);

router.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    try {
      // Check if a file is uploaded and save the product image
      if (req.files && req.files.img) {
        const filename = await saveProductImage(req.files.img);
        updatedProduct.img = filename;
      }
  
      // Find the product in the database and update it
      const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found.' });
      }
  
      res.status(200).json(product);
    } catch (error) {
      console.log('Error while updating product:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  });
  
router.delete('/product/:id', deleteProduct);

router.post('/addproductcart', addProductCart);
router.get('/allproductscart', getProductsCart);
router.get('/productcart/:id', getProductCart);
router.put('/productcart/:id', editProductCart);
router.delete('/productcart/:id', deleteProductCart);

router.post('/addproductwishlist', addProductWishlist);
router.get('/allproductswishlist', getProductsWishlist);
router.get('/productwishlist/:id', getProductWishlist);
router.put('/productwishlist/:id', editProductWishlist);
router.delete('/productwishlist/:id', deleteProductWishlist);

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', editUser);
router.delete('/user/:id', deleteUser);


// Login route
router.post('/login', loginUser);

export default router;