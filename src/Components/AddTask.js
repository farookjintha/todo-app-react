import { useState } from "react";
import { useDispatch } from "react-redux";
const AddTask = ({newTask, setNewTask, addTask}) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const addNewTask = () => {
        dispatch({type: 'ADD_TASK', data: {title: title}});
        setTitle('');
    }

    return (
        <div className="row">
            <div className="col">
                <input className="form-control form-control-lg"
                 value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="col-auto">
                <button onClick={addNewTask} className='btn btn-lg btn-success'>
                    Add Task
                </button>
            </div>
        </div>
    )
}

export default AddTask;