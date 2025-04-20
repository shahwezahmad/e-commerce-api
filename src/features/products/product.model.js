import UserModel from "../User/user.model.js"

export default class ProductModel {

        constructor(id, name, desc, price, imgUrl, category, sizes) {
            this.id = id,
            this.name = name,
            this.desc = desc
            this.price = price
            this.imgUrl = imgUrl
            this.category = category
            this.sizes = sizes
        }


        static addProduct(newProduct) {
            newProduct.id = products.length + 1;
            let {id, name, desc,price, imgUrl, category, sizes = []} = newProduct 
            products.push( new ProductModel(id, name, desc, parseFloat(price), imgUrl, category, sizes.split(',')))
            return products[products.length -1]
        }

        static getAllProducts() {
            return products
        }

        static getProduct(id) {
          return products.find(product => product.id == id)
        }

        static getfilterProducts(minPrice, maxPrice, name) {
          const filterProducuts = products.filter(product => (product.price >= minPrice || product.price <= maxPrice) && (product.name == name))
          return filterProducuts
        }

        static rateProduct(userId, productId, rating) {
          // user is there
          let users = UserModel.getAllUsers()
           let user = users.find(user => user.id == userId)
           let productIndex = products.findIndex(product => product.id == productId)
           
           console.log(productId)
           console.log(products)
           if(!user) return 'No User Found'
           if(productIndex === -1 ) return 'Product Not Found'

           if(!products[productIndex].ratings) {
            products[productIndex].ratings = []
            products[productIndex].ratings.push({userId, rating})
           }else {
              const isUserAlreadyRatedIndex = products[productIndex].ratings.findIndex(rating => rating.userId == userId)
                if(isUserAlreadyRatedIndex !==  -1) {
                  console.log(products[productIndex].ratings)
                  products[productIndex].ratings[isUserAlreadyRatedIndex].rating = rating
                }else products[productIndex].ratings.push({userId,rating})
           }

           
          // product is there

        }
}

var products = [
    new ProductModel(
      1,
      "Product 1",
      "Description for Product 1",
      19.99,
      "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
    ),
    new ProductModel(
      2,
      "Product 2",
      "Description for Product 2",
      29.99,
      "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
    ),
    new ProductModel(
      3,
      "Product 3",
      "Description for Product 3",
      39.99,
      "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
    ),
  ];