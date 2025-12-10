import mongoose from 'mongoose';
import bcrypt from 'bcrypt'; 

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
    registrationDate: {
      type: Date,
      default: Date.now
    }
})

//not nesseccery
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const user = mongoose.model('user', userSchema)

export default user;