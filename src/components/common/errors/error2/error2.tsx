import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function Error2() {
    const error = useRouteError()
    return (
        <div className='h-screen w-screen text-[red] flex flex-col justify-center items-center font-extrabold text-4xl text-center'>
            not found page
            <br />
            error 404
            <br />
            {error.status}
            <br />
            {error.statusText}
            <br />
            <Link to="/" replace={true} className='text-yellow-100 text-2xl flex justify-start text-start'> back to page</Link>
        </div>
    )
}
