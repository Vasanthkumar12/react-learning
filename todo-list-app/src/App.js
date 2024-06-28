import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  let API_URL = "http://localhost:3500/todos"

  const [todos, setTodos] = useState([])
  const [fetchError, setFetchError] = useState(null) // For displaying error
  const [isLoading, setIsLoading] = useState(true) // For displaying Loading

  useEffect(() => {
    let fetchItems = async() => {
      try{
        let response = await fetch(API_URL)
        if(!response.ok) throw "Error: Data is not found"
        // console.log("response = ", response)
        let listItems = await response.json()
        // console.log("listItems = ", listItems)
        setTodos(listItems)
        setFetchError(null)
      }
      catch(err) {
        console.log("error = ", err)
        setFetchError(err)
      }
      finally {
        setIsLoading(false)
      }
    }
    setTimeout(()=> {
      (async() => await fetchItems())()
    }, 2000)
  }, [])

  let handleChange = (id) => {
      let todoss = todos.map(todo => todo.id===id? {...todo, checked: !todo.checked} : todo)
      setTodos(todoss)
      // localStorage.setItem('todos', JSON.stringify(todoss))
  }

  let handleDelete = (id) => {
      let todoss = todos.filter(todo => todo.id !== id )
      setTodos(todoss)
      // localStorage.setItem('todos', JSON.stringify(todoss))
  }

  const [addItem, setAddItem] = useState('Jesus')

  let handleSubmit = (e) => {
    e.preventDefault()
    if(!addItem) return
    console.log(addItem)
    // Add todo in the existing list
    addTodo(addItem)
    setAddItem('')
    
  }

  const addTodo = (todo) => {
    let id = todos.length ? (todos[todos.length - 1].id + 1) : 1
    let newTodo = {id, checked: false, todo}
    let listOfTodos = [...todos, newTodo]
    setTodos(listOfTodos)
    // localStorage.setItem('todos', JSON.stringify(listOfTodos))
  }

  // Search Todo Item
  const [search, setsearch] = useState('')

  return (
    <div id="container">
      <Header title= "Todo List for My daily Acts"/>
      <AddItem 
        addItem = {addItem}
        setAddItem = {setAddItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setsearch}
      />
      <div id="content">
        {fetchError && <p>{`Error: Data is Empty`}</p>}
        {isLoading && <p>{'Data is Loading..'}</p>}
        {!fetchError && !isLoading && <Content 
          todos = {todos.filter(todo => (todo.todo).toLowerCase().includes(search.toLowerCase()))}
          handleChange = {handleChange}
          handleDelete = {handleDelete}
        />}
      </div>
      <Footer 
        todosLength = {todos.length}
      />
    </div>
  );
}

export default App;
