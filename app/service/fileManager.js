import multer from "multer"

const storage= multer.diskStorage({
    destination: './images',
    filename:file.originalname
});

export const uploadFile = multer({storage: storage}).single('image')