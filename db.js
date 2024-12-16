// import mongoose
const {Schema,default:mongoose} = require('mongoose');



const ObjectId = mongoose.Types.ObjectId;

// create schema
const userSchema = Schema({

    email:{type:String, unique: true},
    password:String,
    firstName:String,
    lastName:String,
})

const adminSchema =Schema({
    email:{type:String, unique: true},
    password:String,
    firstName:String,
    lastName:String,
    
})

const courseSchema = Schema({
    
    title:String,
    description:String,
    price: Number,
    imageUrl:String,
    creatorId:ObjectId
})

const purchaseSchema = Schema({
   userId:ObjectId,
   courseId:ObjectId
})

// create model
const userModel = mongoose.model('user' , userSchema);
const adminModel = mongoose.model('admin' , adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);


module.exports ={
    userModel: userModel,
    adminModel: adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel
}