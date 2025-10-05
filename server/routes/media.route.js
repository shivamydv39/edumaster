import express from "express";
import upload from "../utils/multer.js";
import { uploadMedia } from "../utils/cloudinary.js";
import { uploadVideo } from "../utils/cloudinary.js";

const router = express.Router();

router.route("/upload-video").post(upload.single("file"), async(req,res) => {
    try {
        // Use uploadVideo for video files to ensure proper video handling
        const result = await uploadVideo(req.file.path);
        res.status(200).json({
            success:true,
            message:"Video uploaded successfully.",
            data:result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error uploading video file"})
    }
});
export default router;