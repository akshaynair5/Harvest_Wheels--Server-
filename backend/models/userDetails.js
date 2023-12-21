import mongoose from "mongoose";

const userDataSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        number:{
            type:Number,
            required:true
        },
        job:{
            type:String,
            required:true
        },
        profileUrl:{
            type:String,
            required:true
        },
        placeOfResidence:{
            type:String,
            required:true
        },
        links:{
            type:[String],
            required:true
        }
    },
    {
        timestamps:true
    }
)

export const User = mongoose.Model('User',userDataSchema); 