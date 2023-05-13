import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faCircleCheck, faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({todoList, markTaskAsDone, setUpdateData, deleteTask}) => {


    return (
        <>
        {
            todoList && todoList.sort((a, b) => a.id > b.id ? 1 : -1).map((task, index) => (
                <React.Fragment key={task.id}>
                    <div className="col taskBg">
                        <div className={ task.status ? 'done' : 'not-done'}>
                            <span className="taskNumber">{index + 1}</span>
                            <span className="taskText">{task.title}</span>
                        </div>
                        <div className="icon-wrapper">


                            <span title="Completed / Not Completed" onClick={() => markTaskAsDone(task.id)} >
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>


                            <span title='Edit' 
                                onClick={() => setUpdateData({
                                    id: task.id,
                                    task: task.title,
                                    status: task.status ? true : false
                                })}
                                >
                                <FontAwesomeIcon icon={faPen} />
                            </span>


                            <span title='Delete' onClick={() => deleteTask(task.id)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </span>


                        </div>
                    </div>
                </React.Fragment>
            ))
        }
        
        </>
    )
}

export default TodoList;