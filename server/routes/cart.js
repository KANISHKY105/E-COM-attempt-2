const express = require('express')
const router = express.Router()

const { productsInCart } = require('../controllers/cart')

router.route('/')
    .get(productsInCart)

module.exports = router