const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

mongoose.connect("mongodb+srv://AndrewsSouza:Andr&ws123@cluster0-qdrif.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
})

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use((req, res, next) => {
  req.io = io

  next()
})

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./postRouter'))


server.listen(3333)
