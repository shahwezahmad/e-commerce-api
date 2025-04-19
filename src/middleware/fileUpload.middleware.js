import multer from "multer";
import path from 'path'

// create storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
         const folderPath = path.join(path.resolve(),"public","upload")
        
        cb(null, folderPath)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

export default multer({storage})