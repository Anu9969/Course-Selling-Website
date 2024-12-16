// import mongoose
const {Schema,default:mongoose} = require('mongoose');

// create schema
const userSchema = Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
    
})

const adminSchema =Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }

})

const courseSchema = Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type:number,
        required:true
    },
    imageURL:{
        type:String,
        required:false
    },
    creatorId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

const purchaseSchema = Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

// create model
const userModel = mongoose.Model('user' , userSchema);
const adminModel = mongoose.Model('admin' , adminSchema);
const courseModel = mongoose.Model('course', courseSchema);
const purchaseModel = mongoose.Model('purchase', purchaseSchema);


module.exports ={
    userModel: userModel,
    adminModel: adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel
}