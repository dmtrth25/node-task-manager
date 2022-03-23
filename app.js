const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// routes
const PORT = 3030
app.get('/', (req, res) => {
   res.send('Basic settings')
})

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks') // get all tasks
// app.post('/api/v1/tasks') // create
// app.get('/api/v1/tasks/:id') // get task
// app.patch('/api/v1/tasks/:id') // update
// app.delete('/api/v1/:id') // delete

app.listen(PORT, () => {
   console.log(`Server was started on ${PORT}`);
})
