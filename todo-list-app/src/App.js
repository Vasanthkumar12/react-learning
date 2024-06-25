import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(
    [
        { 
            id: 1,
            checked: true,
            todo: "Reading Bible reading"
        },
        {
            id:2,
            checked: false,
            todo: "Praying"
        },
        {
            id: 3,
            checked: true,
            todo: "React Learning"
        }
    ]
  )   

  let handleChange = (id) => {
      let todoss = todos.map(todo => todo.id===id? {...todo, checked: !todo.checked} : todo)
      setTodos(todoss)
  }

  let handleDelete = (id) => {
      let todoss = todos.filter(todo => todo.id !== id )
      setTodos(todoss)
  }

  return (
    <div id="container">
      <Header title= "Todo List for My daily Acts"/>
      <Content 
        todos = {todos}
        handleChange = {handleChange}
        handleDelete = {handleDelete}
      />
      <Footer 
        todosLength = {todos.length}
      />
    </div>
  );
}

export default App;
