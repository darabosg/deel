import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState(null)
    const history = useHistory()

    const token = localStorage.getItem('token')

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_SERVER_URL + '/api/data', {
                headers: {
                    'x-api-key': token,
                },
            })
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    const logOut = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <div className='section'>
            <div className='column is-half is-offset-one-quarter'>
                <div className='box mt-6'>
                    <p className='title'>Data</p>
                    {data && (
                        <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(row => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <button className='button is-danger' onClick={logOut}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
