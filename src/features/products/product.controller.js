
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
        console.log(req.query)
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

    static updateStatusOfProduct(req, res ) {

    }
}