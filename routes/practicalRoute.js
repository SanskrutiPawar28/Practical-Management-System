import express from "express"
import { createAdmin,createTeacher,createStudent, getAllUsers,getAllAdmin,getAllTeacher,getAllStudent} from "../controllers/userController.js";
import { createSubject, getAllSubjects } from "../controllers/subjectController.js";
import { createPractical, getAllPracticals } from "../controllers/practicalController.js";
import { enrollStudents } from "../controllers/enrollStudentController.js";
import { isAdmin,isTeacher,isAdminGet,isTeacherGet,isAdminOrTeacher} from "../middleware/Middleware.js"

const router=express.Router()

router.post("/admin/create",createAdmin)
router.post("/teacher/create",createTeacher)
router.post("/student/create",createStudent)
router.get("/users/get",isAdminGet,getAllUsers)
router.get("/teachers/get",isAdminGet,getAllTeacher)
router.get("/students/get",isAdminOrTeacher,getAllStudent)
router.get("/admin/get",isAdminGet,getAllAdmin)
router.post("/subject/create",isAdmin,createSubject)
router.get("/subjects/get",getAllSubjects)
router.post("/practical/create",isTeacher,createPractical)
router.get("/practical/get",getAllPracticals)
router.post("/student/enroll",enrollStudents)
router.get("/user/get",getAllUsers)

export default router;