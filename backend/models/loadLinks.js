import mongoose from "mongoose";

const loadLinks = mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        start:{
            type:String,
            required:true
        },
        destination:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true
        },
        details:{
            type:String,
            required:true
        },
        expiry:{
            type:Boolean,
            required:true
        },
        reply:{
            type:[
                {
                    replyUserId:{
                        type:String,
                        required:true
                    },
                    replyMessage:{
                        type:String,
                        required:true
                    }
                }
            ]
        }

    },
    {
        timestamps:true
    }
)

export const loadLink = mongoose.Model("loadlink",loadLinks);