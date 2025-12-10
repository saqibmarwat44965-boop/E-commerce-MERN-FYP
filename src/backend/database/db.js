import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.pvwckem.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Connected the Database successfully');
    } catch(error) {
        console.log('Error while connecting the Database');
    } 

}

export default Connection;