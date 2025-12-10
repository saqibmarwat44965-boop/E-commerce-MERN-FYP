import mongoose from 'mongoose';

// Custom ID generator function
const generateCustomId = () => {
  // Generate a unique ID using your own custom logic
  // You can use any algorithm or combination of characters you prefer
  // For simplicity, this example generates a random 6-digit alphanumeric ID
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
};

const productSchema = mongoose.Schema({
  _id: {
    type: String,
    default: generateCustomId, // Use the custom ID generator function as the default value
  },
  productname: String,
  category: String,
  status: String,
  discount: String,
  title: String,
  color: String,
  brand: String,
  materials: String,
  style: String,
  price: String,
  img: String,
  productUploader: String,
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

const product = mongoose.model('product', productSchema);

export default product;