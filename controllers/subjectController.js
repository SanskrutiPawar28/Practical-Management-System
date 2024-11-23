import userModel from "../models/User.js"; 
import subjectModel from "../models/Subject.js"; 


export const createSubject = async (req, res) => {
    try {
        const { name, code, createdBy } = req.body;

        const userInfo = await userModel.findOne({ email: createdBy });

        
        if (!userInfo) {
            return res.status(404).json({ message: "User not found!" });
        }

      
        const subjectObj = new subjectModel({
            name,
            code,
            createdBy: userInfo._id 
        });

     
        const savedSubjectObj = await subjectObj.save();

        res.json({
            savedSubjectObj,
            message: "Subject created successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error occurred while creating subject",
        });
    }
};


export const getAllSubjects = async (req, res) => {
    try {
        const getSubjects = await subjectModel.find(); 
        res.json({
            getSubjects
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Cannot fetch data"
        });
    }
};
