const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()
const notFound = require('./middleware/not-found')

// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(notFound)

const PORT = process.env.PORT || 3030

// routes

app.use('/api/v1/tasks', tasks)



const start = async () => {
   try {
      await connectDB(process.env.MONGO_URL)
      app.listen(PORT, () => console.log(`Server was started on ${PORT}`))
   } catch (error) {
      console.log(error);
   }
}

start()