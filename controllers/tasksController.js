
const getAllTasks = (req, res) => {
   res.send('Tasks')
}

const createTask = (req, res) => {
   res.json(req.body)
}

const getTask = (req, res) => {
   res.json({id: req.params.id})
}

const updateTask = (req, res) => {
   res.send('Update')
}

const deleteTask = (req, res) => {
   res.send('delete')
}

module.exports = {
   getAllTasks,
   createTask,
   getTask,
   updateTask,
   deleteTask
}