import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TodoList from './Components/TodoList';
import UpdateTask from './Components/UpdateTask';
import TodoContext from './context';

function App() {
  const [todoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');


  const addTask = () => {
    if(newTask){
      let id = todoList.length + 1;
      let newData = {id, title: newTask, status: false};
      setTodoList([...todoList, newData]);

      setNewTask('');
    }
  }

  const updateTask = () => {
    const filteredTasks = todoList.filter(task => task.id !== updateData.id);
    let updatedTaskList = [...filteredTasks, updateData];
    setTodoList(updatedTaskList);

    setUpdateData('');
  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    };
    setUpdateData(newEntry);
  }

  const cancelTask = () => {
    setUpdateData('');
  }

  const deleteTask = (id) => {
    let filteredTasks = todoList.filter(task => task.id !== id);
    setTodoList(filteredTasks);
  } 

  const markTaskAsDone = (id) => {
    let updatedTasks = todoList.map(task => {
      if(task.id === id){
        return {...task, status: !task.status}
      }
      return task;
    })

    setTodoList(updatedTasks);
  }

  

  return (
    <TodoContext.Provider value={todoList}>
      <div className='container App'>
      <h2>To-do App</h2>

      
      {
        updateData && updateData ? (
          <UpdateTask updateData={updateData} changeTask={changeTask} updateTask={updateTask} cancelTask={cancelTask} />
        ) : (
          <AddTask newTask={newTask}  setNewTask={setNewTask} addTask={addTask} />
        )
      }

      <br />
      <TodoList 
        markTaskAsDone={markTaskAsDone} 
        setUpdateData={setUpdateData} 
        deleteTask={deleteTask}
      />

    </div>
    </TodoContext.Provider>
  );
}

export default App;
