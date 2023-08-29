import axios from 'axios'
import React, { useState } from 'react'

const TodoForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title === "" || description === "") {
            return (
                alert("Please fill all the fields")
            )
        }
        await axios.post("http://localhost:4000/api/", {
            title,
            description
        })
        window.location.reload()
    }

    return (
        <div className='bg-base-300 rounded-lg p-5 flex flex-col gap-4 text-white'>
            <div className='flex gap-4'>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title" className="input border-none input-primary w-full" />
                <button onClick={(e) => handleSubmit(e)} className={`btn btn-primary  `}>Add</button>

            </div>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea border-none  w-full" placeholder="Description"></textarea>
        </div>
    )
}

export default TodoForm