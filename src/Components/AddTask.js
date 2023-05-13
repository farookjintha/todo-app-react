const AddTask = ({newTask, setNewTask, addTask}) => {
    return (
        <div className="row">
            <div className="col">
                <input className="form-control form-control-lg"
                 value={newTask} onChange={e => setNewTask(e.target.value)} />
            </div>
            <div className="col-auto">
                <button onClick={addTask} className='btn btn-lg btn-success'>
                    Add Task
                </button>
            </div>
        </div>
    )
}

export default AddTask;