
import express from 'express'
import Product from './product.controller.js'
import upload from '../../../src/middleware/fileUpload.middleware.js'

const router = express.Router()

router.get("/", Product.getProducts)
router.get("/filter", Product.getfilterProducts)
router.post("/", upload.single('imgUrl'), Product.addProduct)
router.get("/:id", Product.getProduct)


export default router