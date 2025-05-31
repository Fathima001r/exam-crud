const express = require('express')
const courseModel = require ('../models/courses');
const router = express.Router()



router.post('/post',async(req,res)=>{
    try {
        const {title,description,duration,instructor} = req.body
        if (!title || !description || !duration || !instructor){
            return res.status(400).json({message: "all fields are required"})
        }
        const newData = await courseModel.create({title,description,duration,instructor})
        res.status(201).json(newData)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/get', async (req, res) => {
    try {
        const data = await courseModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});


router.put('/put/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updateData = await courseModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(200).json(updateData)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const deleteData = await courseModel.findByIdAndDelete(id);
        if (!deleteData) {
            return res.status(404).json({ message: "corurse not found" });
        }
        res.status(200).json({ message: "corurse deleted successfully", deletedcourse: deleteData });
    } catch (error) {
        res.status(400).json(error);
    }
});









module.exports = router