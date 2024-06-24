import React, { useState } from 'react'

export default function Content() {
    const [todos, setTodos] = useState(
        [
            { 
                id: 1,
                checked: true,
                todo: "Reading Bible"
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

  
    return (
        <div id="content">
            <ul>
                {   
                    todos.map((todo) => {
                        return(<li>
                            <input type="checkbox" checked={todo.checked} />
                            <label>{todo.todo}</label>
                            <button>Delete</button>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
