let express = require('express')
let app = express()
let path = require('path')
let articleRoute = require('./routes/article')
let bodyParser = require('body-parser')
let logger = require('morgan');
let cors = require('cors')

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
  next()
})


//app.use(articleRoute);

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));


app.use('/api/article', articleRoute);

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send('We think you are lost!')
})

// Handler for Error 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))