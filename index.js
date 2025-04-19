import express from 'express'
import ProductRouter from './src/features/products/product.router.js'
import UserRouter from './src/features/User/user.router.js'
import { basicAuth } from './src/middleware/basicAuth.middleware.js'

const app = express()
const PORT = process.env.PORT ?? 5000

//application level middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api/products",basicAuth, ProductRouter)
app.use("/api/users", UserRouter)

app.get('/', (req, res) => {
    res.send('Welcome to e-commerce api')
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))