import express from 'express'
import cors from 'cors'
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/api/users', (req, res) => {
  res.status(501);
})

app.post('/api/users', (req, res) => {
  res.status(501);
})

app.post('/api/users/:id/exercises', (req, res) => {
  res.status(501);
})

app.get('/api/users/:id/logs', (req, res) => {
  res.status(501);
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
