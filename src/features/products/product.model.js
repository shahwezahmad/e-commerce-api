
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
            console.log( products[products.length -1])
            return products[products.length -1]
        }

        static getAllProducts() {
            return products
        }

        static getProduct(id) {
          return products.find(product => product.id == id)
        }

        static getfilterProducts(minPrice, maxPrice, name) {
          console.warn('--------')
        
          const filterProducuts = products.filter(product => (product.price >= minPrice || product.price <= maxPrice) && (product.name == name))
          console.log(filterProducuts)
          return filterProducuts
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