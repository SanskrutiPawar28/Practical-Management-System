import mongoose from 'mongoose';
const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
   
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
const subjectModel = mongoose.model("Subject", subjectSchema);
export default subjectModel;