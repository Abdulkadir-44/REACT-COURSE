import { useReducer } from 'react'

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_TODO":
            return {
                ...state,
                todo: action.value
            }

        case "ADD_TODO":
            return {
                ...state,
                todo: '',
                todos: [
                    ...state.todos,
                    state.todo
                ]
            }
        default:
            return state
    }
}

const UseReducerWithTodo = () => {
    const [state, dispatch] = useReducer(reducer, {
        todos: [],
        todo: ''
    })

    const handleChange = e => {
        dispatch({
            type: "SET_TODO",
            value: e.target.value
        })
    }

    const handleClick = () => {
        if (state.todo.length != 0) {
            dispatch({
                type: "ADD_TODO",
                todo: state.todo
            })
        }

    }

    return (
        <div className='m-5'>

            <input
                value={state.todo}
                onChange={handleChange}
                className='outline-none border border-1 border-blue-600 py-1 px-2 rounded-md text-sm'
                type="text"
                placeholder='Todo giriniz...'
            />

            <button
                onClick={handleClick}
                className='bg-blue-600 ml-2 px-2 py-1 rounded-md text-white text-sm'
            >
                Ekle
            </button>

            {
                state.todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))
            }
        </div>
    )
}

export default UseReducerWithTodo