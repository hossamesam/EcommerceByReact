import Error1 from '@components/common/errors/error1/error1'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    return (
        <Error1 />
    )
}
