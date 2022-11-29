
import React, { useState, useEffect } from 'react';

import Todo from './components/Todo';
import './App.css';

const TodoList = [
  {
    id:1,
    title:'Make a Toast',
    done:false
  },
  {
    id:2,
    title:'Make a Call',
    done:false
  }
]


function App() {

  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])


  useEffect(() => {
      setTodos(TodoList)
     


  },[])


  return (
    <div className="App">
      <header className='header'>
        <form>
          <input type="text" id="title" name="title" placeholder='Todo Title' autoComplete='off'></input>
          <input type="submit" value="ADD" />
        </form>
      </header>

      <main className='content'>
       {
          todos.map((todo) => {
            return(<Todo id={todo.id} title={todo.title} done={todo.done}/>)
          })
       }
      </main>
    </div>
  );
}

export default App;
