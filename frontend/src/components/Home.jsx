import React, { useEffect } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import axios from 'axios'

const Home = () => {
    const [todos, setTodos] = React.useState([])
    useEffect(() => {
        const getTodos = async () => {
            const response = await axios.get('http://localhost:4000/api/')
            setTodos(response.data.data)
        }
        getTodos()
    }, [])
    return (
        <div className='min-h-screen pt-20 mx-auto flex flex-col gap-4 lg:w-[50%] md:w-[70%]  sm:w-[90%] w-[95%]'>
            <div>
                <TodoForm />
            </div>
            <div className='bg-base-200 rounded-lg p-5 flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    {/* if todo length is 0  */}
                    {
                        todos.length === 0 && <p className='text-center text-white text-2xl'>No Todos</p>
                    }
                    {
                        todos.map((todo, index) => (
                            <Todos key={todo._id} todo={todo} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home