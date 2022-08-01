const express = require("express");
const router = express.Router();
const Resume = require("../models/resume.model")
router.get("/", async (req, res) => {
    try{
        let resumes = await Resume.find()
        return res.status(200).json({success: true, resumes})
    }catch(e) {
        return res.status(500).json({success:false, message: "something went wrong"})
    }
})
router.get("/:id", async (req, res) => {
    try{
        let resumes = await Resume.findById({_id: req.params.id})
        return res.status(200).json({success: true, resumes})
    }catch(e) {
        return res.status(500).json({success:false, message: "something went wrong"})
    }
})
router.post("/", async (req, res) => {
    try{
        let resume = await Resume.create(req.body)
        return res.status(200).json({success:true, resume})
    }catch(e) {
        return res.status(500).json({success:false, message: "something went wrong"})
    }

})

router.patch("/:id", async(req, res) => {
    let resume = await Resume.findByIdAndUpdate(req.params.id, req.body, {new : true})
    res.status(200).json({
        success:true, 
        resume
    })
})

module.exports = router;