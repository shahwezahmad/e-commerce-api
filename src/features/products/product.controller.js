
import ProductModel from "./product.model.js"
export default class Product {

    static addProduct(req, res) {
        // let {name, desc, imgUrl} = req.body
        const file = req.file
        req.body.imgUrl = req.file.path
       
       let product = ProductModel.addProduct(req.body)
       res.send(product)
        
    }

    static getProduct(req, res) {   
        const id  = req.params.id
        const product = ProductModel.getProduct(id)
        if(product) {
            res.status(200).send(product)
        }else {
            res.status(404).send('Product not found!')
        }
        
    }

    static getfilterProducts(req, res) {
        let minPrice = req.query.minPrice
        let maxPrice = req.query.maxPrice
        let name = req.query.name
   
        let products = ProductModel.getfilterProducts(parseFloat(minPrice), parseFloat(maxPrice), name)
        if(!products) {
            res.status(404).send('Filter Product not found')
        } else {
            res.status(200).send(products)
        }
        
        
    }

    static getProducts(req, res) {
        res.json(ProductModel.getAllProducts())
    }

    static rateProduct(req, res ) {
        let {userId, productId, rating} = req.query
        console.log(req.query)
        let error = ProductModel.rateProduct(userId, productId, rating)
        if(error) {
            return res.status(400).json({status:"fail", msg: error})
        }

        res.status(200).json({
            status: "success",
            msg: "Rating successfully added!"
        })
    }
}