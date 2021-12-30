
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, setReminder}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={ () => setReminder(task.id)}>
            <h3 >{task.posts} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={ () => onDelete(task.id)} /> </h3>
            <h3>Feeling: {task.feeling}</h3>
        
        </div>
    )
}

export default Task
