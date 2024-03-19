import mongoose from 'mongoose';

const user = new mongoose.Schema({
    name:String,
    lName: String,
    email: String,
    mobile: String,
    project: String,
},{timestamps:true})

export default mongoose.model("USERS",user);