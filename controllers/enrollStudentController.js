import EnrollStudent from "../models/EnrollStdudent.js"
import Practical from "../models/Practical.js"


export const enrollStudents = async (req, res) => {
    try {
        const { student, practical } = req.body;
        const enrollStudent = new EnrollStudent({
            student,
            practical,
        });
        const savedenrollstudents = await enrollStudent.save();
        const updatedPractical = await Practical.findByIdAndUpdate(practical, { $addToSet: { enrolledStudent: student } },{ new: true }).populate("enrolledStudent")
        .exec();
        res.json({
            practical: updatedPractical
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error while enrolling student",
        });
    }
};