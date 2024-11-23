import userModel from "../models/User.js";
export const isAdmin = async (req, res, next) => {
    try {
        const { createdBy } = req.body;  
       const userInfo = await userModel.findOne({ email: createdBy });  
       if (userInfo && userInfo.role === "Admin") {
            next(); // proceed
        } else {
            res.status(403).json({
                message: "Access Denied, only Admin can access..."
            });
        }
    } catch (error) {
        console.error("Error in isAdmin middleware:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};


export const isTeacher = async (req, res, next) => {
    try {
        const { createdBy } = req.body;  
       const userInfo = await userModel.findOne({ email: createdBy });  
       if (userInfo && userInfo.role === "Teacher") {
            next(); // proceed
        } else {
            res.status(403).json({
                message: "Access Denied, only Teacher can access..."
            });
        }
    } catch (error) {
        console.error("Error in isTeacher middleware:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};



export const isAdminGet = async (req, res, next) => {
    try {
        const { email } = req.body; // Get email from request body

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        const userInfo = await userModel.findOne({ email });

        if (userInfo && userInfo.role === "Admin") {
            next(); // Proceed if user is admin
        } else {
            res.status(403).json({
                message: "Access Denied, only Admin can access..."
            });
        }
    } catch (error) {
        console.error("Error in isAdmin middleware:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const isTeacherGet = async (req, res, next) => {
    try {
        const { email } = req.body; // Get email from request body

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        const userInfo = await userModel.findOne({ email });

        if (userInfo && userInfo.role === "Teacher") {
            next(); // Proceed if user is admin
        } else {
            res.status(403).json({
                message: "Access Denied, only Teacher can access..."
            });
        }
    } catch (error) {
        console.error("Error in isTeacher middleware:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};



export const isAdminOrTeacher = async (req, res, next) => {
    try {
        const email = req.body['email'];

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        const userInfo = await userModel.findOne({ email });

        if (userInfo && (userInfo.role === "Admin" || userInfo.role === "Teacher")) {
            next(); 
        } else {
            res.status(403).json({
                message: "Access Denied, only Admin or Teacher can access..."
            });
        }
    } catch (error) {
        console.error("Error in isAdminOrTeacher middleware:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};



