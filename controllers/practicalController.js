import practicalModel from '../models/Practical.js';  
import Practical from '../models/Practical.js'
import Subject from '../models/Subject.js'
import userModel from '../models/User.js';
   
export const createPractical = async (req, res) => {

    try {

        const {subjectId, title, description,createdBy } = req.body;
        const subjectinfo = await Subject.findOne({ name: subjectId });
        const userInfo = await userModel.findOne({ email: createdBy });

        const practicalobj = new practicalModel({
            subjectId:subjectinfo.id,
            title,
            description,
            createdBy:userInfo.id
        });

        const savedpracticalObj = await practicalobj.save();

        res.json({

            savedpracticalObj,
            message: "Subject created successfully"
        });

    } catch (error) {

        console.log(error);

        res.json({

            error: "Error occured",
        });

    }
}

export const getAllPracticals=async(req,res)=>{
    try {
        const getPracticals=await Practical.find()
        res.json({
            getPracticals
        })
    } catch (error) {
        res.json({
            error:"Cannot fetch data"
        })
        console.log(error)
    }
}