const express = require('express')
const router = express.Router()

const {findAllProducts, addToCart} = require('../controllers/products')

router.route('/')
.get(findAllProducts)
.post(addToCart)


module.exports = router