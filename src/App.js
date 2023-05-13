import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddTask from './Components/AddTask';
import TodoList from './Components/TodoList';
import UpdateTask from './Components/UpdateTask';
import TodoContext from './context';
import store from './store/store';

function App() {
  const [updateData, setUpdateData] = useState('');

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

  return (
    // <TodoContext.Provider value={todoList}>
    <Provider store={store}>
        <div className='container App'>
        <h2>To-do App</h2>

        {
          updateData && updateData ? (
            <UpdateTask updateData={updateData} setUpdateData={setUpdateData} cancelTask={cancelTask} changeTask={changeTask}/>
          ) : (
            <AddTask />
          )
        }

        <br />
        <TodoList setUpdateData={setUpdateData} />

      </div>
    </Provider>
    // </TodoContext.Provider>
  );
}

export default App;
