import './index.css'

const Tasks = props => {
  const {listTask} = props
  const {task, tag} = listTask

  return (
    <li className="list-tasks">
      <p className="task-name">{task}</p>
      <div className="task-container">
        <p className="">{tag}</p>
      </div>
    </li>
  )
}

export default Tasks
