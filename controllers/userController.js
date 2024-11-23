import User from "../models/User.js"
import userModel from "../models/User.js";
export const createAdmin=async (req,res) => {
    try {
        const {name,email,password}=req.body;
        const user=new userModel({
            name,
            email,
            password,
            role:"Admin",
        });
        const savedUser=await user.save();
        res.json({
            user:savedUser,
            message:"Admin created successfully"
        })
    } catch (error) {
        res.json({
            message:"Server error"
        })
        console.log(error)
    }
}

export const createTeacher=async (req,res) => {
    try {
        const {name,email,password}=req.body;
        const user=new userModel({
            name,
            email,
            password,
            role:"Teacher",
        });
        const savedUser=await user.save();
        res.json({
            user:savedUser,
            message:"Teacher created successfully"
        })
    } catch (error) {
        res.json({
            message:"Server error"
        })
        console.log(error)
    }
}

export const createStudent=async (req,res) => {
    try {
        const {name,email,password}=req.body;
        const user=new userModel({
            name,
            email,
            password,
            role:"Student",
        });
        const savedUser=await user.save();
        res.json({
            user:savedUser,
            message:"Student created successfully"
        })
    } catch (error) {
        res.json({
            message:"Server error"
        })
        console.log(error)
    }
}

export const getAllUsers=async(req,res)=>{
    try {
        const getUsers=await User.find()
        res.json({
            getUsers
        })
    } catch (error) {
        res.json({
            error:"Cannot fetch data"
        })
        console.log(error)
    }
}

export const getAllTeacher = async (req, res) => {
    try {
        const getTeachers = await User.find({ role: "Teacher" }); 
        res.json({
            getTeachers
        });
    } catch (error) {
        res.json({
            error: "Cannot fetch data"
        });
        console.log(error);
    }
};

export const getAllStudent = async (req, res) => {
    try {
        const getStudents = await User.find({ role: "Student" }); 
        res.json({
            getStudents
        });
    } catch (error) {
        res.json({
            error: "Cannot fetch data"
        });
        console.log(error);
    }
};

export const getAllAdmin = async (req, res) => {
    try {
        const getAdmin = await User.find({ role: "Admin" }); 
        res.json({
            getAdmin
        });
    } catch (error) {
        res.json({
            error: "Cannot fetch data"
        });
        console.log(error);
    }
};
