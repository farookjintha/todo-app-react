const todoList = [];

const todoReducer = (state = todoList, action) => {
    switch(action.type){
        case 'GET_TODO': {
            return state;
        }
        case 'ADD_TASK': {
            let id = state.length + 1;
            let newTask = {...action.data, id: id, status: false}
            return [...state, newTask];
        }
        case 'UPDATE_TASK': {
            const filteredTasks = state.filter(task => task.id !== action.data.id);
            let updatedTaskList = [...filteredTasks, action.data];
            return updatedTaskList
        }
        case 'DELETE_TASK': {
            let updatedTaskList = state.filter(task => task.id !== action.data.id)
            return updatedTaskList;
        }

        case 'MARK_DONE': {
            let updatedTaskList = state.map(task => {
                    if(task.id === action.data.id){
                      return {...task, status: !task.status}
                    }
                    return task;
                  })
            return updatedTaskList
        }
        default: 
            return state;
    }
};

export default todoReducer;