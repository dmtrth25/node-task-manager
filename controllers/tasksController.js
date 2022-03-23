
const getAllTasks = (req, res) => {
   res.send('Tasks')
}

const createTask = (req, res) => {
   res.send('Create')
}

const getTask = (req, res) => {
   res.send('Get Task')
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