const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'build', 'index.html'))
})

// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build/index.html'))
// })

const { sendEmail } = require('./mail')

app.post("/api/sendMail",(req, res) => {
  try{
    console.log(req.body)
    sendEmail(req.body.email, req.body.name, req.body.message)
    res.send('success')
  } catch (err) {
    next(err)
  }

})

app.listen(5000, () => {
  console.log("Server is running at 5000")
})


