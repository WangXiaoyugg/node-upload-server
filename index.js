const express = require('express')
const multer = require('multer')
const cors = require('cors')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log(req.file)
  res.send(req.file.filename)
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})