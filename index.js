const express = require('express')
const multer = require('multer')
const cors = require('cors')
const upload = multer({ dest: 'uploads/' })
const path = require('path')

const app = express()

app.post('/upload', cors(), upload.single('file'), (req, res, next) => {
  res.send(req.file.filename)
})

app.get('/preview/:id', (req, res, next) => {
  res.sendFile(`/uploads/${req.params.id}`, {
    root: path.join(__dirname),
    headers: {
      'Content-Type': 'image/*'
    },
  }, error => {
    res.status(404).end('file not found')
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`)
})