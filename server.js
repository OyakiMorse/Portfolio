const express = require('express')
const sendMail = require('./public/js/userLetter')

const log = console.log
const app = express()

const PORT = 8080
const path = require('path')
const router = express.Router()

//Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(express.json())

app.post('/', (req, res) => {
  const { username, userEmail, userProject, userMessage } = req.body

  sendMail(username, userEmail, userProject, userMessage, (err, data) => {
    if (err) {
      res.status(500).json('Internal Error 500')
    } else {
      res.sendFile(path.join(__dirname, './public/index.html')) // worst decision..
    }
  })
})

app.use(express.static('public'))

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

router.get('/kovalski', (req, res) => {
  res.sendFile(path.join(__dirname, './public/pageNotFound.html'))
})

router.get('*', (req, res) => {
  res.redirect('/')
})

app.use('/', router)

app.listen(PORT, () => log('Server is tarting on port, ', 8080))
