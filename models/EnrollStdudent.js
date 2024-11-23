import mongoose from 'mongoose';


const enrollStudentSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    practical: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Practical",
        required: true
    }
})
const enrollStudentModel = mongoose.model("EnrollStudent", enrollStudentSchema);
export default enrollStudentModel;