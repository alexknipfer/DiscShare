const express = require('express')
const router = express.Router()

router.post('/create', (req, res, next) => {
  console.log(req.body)
  res.send({
    message: 'Created Successfully'
  })
})

router.get('/', (req, res, next) => {
  res.json({
    message: 'created successfully!'
  })
})

module.exports = router
