const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()
const notFound = require('./middleware/not-found');
const handleError = require('./middleware/error-hadler')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(handleError)

const PORT = process.env.PORT || 3030

const start = async () => {
   try {
      await connectDB(process.env.MONGO_URL)
      app.listen(PORT, () => console.log(`Server was started on ${PORT}`))
   } catch (error) {
      console.log(error);
   }
}

start()