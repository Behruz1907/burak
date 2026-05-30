import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
 // Schema firt & code first
const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER
    }, 
    memberstatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE
    },


    memberNick: {
        type: String,
        index: { unique: true, sparse: true },
        required: true,
    },

    memberPhone: {
        type: String,
        index: { unique: true, sparse: true },
        required: true,
    },

    memberPassword: {
        type: String,
        select: false,
        required: true
    },

    memberAddress: {
        type: String,
    },

    memberDesc: {
        type: String,
    },
        
    memberImage: {
        type: String,
    },

    memberPoints: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });  // updatedAt, updatedAt


export default mongoose.model('Member', memberSchema);