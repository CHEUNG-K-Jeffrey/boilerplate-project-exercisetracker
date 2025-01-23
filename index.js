import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

await mongoose.connect(process.env.MONGO_URI)

const Users = mongoose.model('Users', new mongoose.Schema({
  username: String
}))

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
