const UpdateTask = ({updateData, changeTask, updateTask, cancelTask}) => {
    return (
        <div className="row">
            <div className="col">
                <input className="form-control form-control-lg"
                 value={updateData && updateData.title} onChange={e => changeTask(e)} />
            </div>
            <div className="col-auto">
                <button onClick={updateTask} className='btn btn-lg btn-success'>
                    Update
                </button>
                <button onClick={cancelTask} className='btn btn-lg btn-success'>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default UpdateTask;