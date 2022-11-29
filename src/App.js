
import React,{useState,useEffect} from 'react';
import './App.css';

const todoObj = {
  name:'',
  status:'false'
}

function App() {

  const [title,setTitle] = useState('')
  const [todos,setTodos] = useState([])
  
  return (
    <div className="App">
     <header className='header'>
      <form>
        <input type="text" placeholder='Todo Title'></input>
        <input type="submit" value="ADD"/>
      </form>
     </header>
    </div>
  );
}

export default App;
