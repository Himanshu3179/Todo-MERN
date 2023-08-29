import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar bg-base-200 fixed">
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                My App
            </Link>
        </div>
    )
}

export default Header