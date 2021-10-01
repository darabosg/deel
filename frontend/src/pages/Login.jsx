import React, { useState, useEffect } from 'react'
import produce from 'immer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { FaLock, FaUser, FaUserLock } from 'react-icons/fa'

const Login = () => {
    const [loginInput, setLoginInput] = useState({ userName: '', password: '' })
    const [errorMsg, setErrorMsg] = useState('')

    const history = useHistory()

    const loginInputChangeHandler = e => {
        setLoginInput(
            produce(draft => {
                draft[e.target.name] = e.target.value
            })
        )
    }

    const loginPost = e => {
        e.preventDefault()
        axios
            .post(process.env.REACT_APP_SERVER_URL + '/api/login', loginInput)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                history.push('/')
            })
            .catch(err => {
                setErrorMsg(err.response.data.msg)
            })
    }

    useEffect(() => {
        const errorMsgTimeout = setTimeout(() => {
            setErrorMsg('')
        }, 2000)
        return () => {
            clearTimeout(errorMsgTimeout)
        }
    }, [errorMsg])

    return (
        <div className='section'>
            <div className='column is-half is-offset-one-quarter'>
                <div className='box mt-6'>
                    <span className='icon-text mb-5'>
                        <FaUserLock className='icon is-medium mr-3' />
                        <p className='title'>Login</p>
                    </span>
                    <form onSubmit={loginPost}>
                        <div className='field'>
                            <label className='label' htmlFor='user_name'>
                                User
                            </label>
                            <p class='control has-icons-left'>
                                <input
                                    required
                                    className='input'
                                    name='userName'
                                    type='text'
                                    id='user_name'
                                    value={loginInput.userName}
                                    onChange={loginInputChangeHandler}
                                />
                                <span class='icon is-small is-left'>
                                    <FaUser />
                                </span>
                            </p>
                        </div>

                        <div className='field'>
                            <label className='label' htmlFor='password'>
                                Password
                            </label>
                            <p class='control has-icons-left'>
                                <input
                                    required
                                    className='input'
                                    name='password'
                                    type='password'
                                    id='password'
                                    value={loginInput.password}
                                    onChange={loginInputChangeHandler}
                                />
                                <span class='icon is-small is-left'>
                                    <FaLock />
                                </span>
                            </p>
                        </div>
                        <div className='block'>
                            <p className='is-block has-text-danger'>
                                &nbsp;{errorMsg}
                            </p>
                        </div>

                        <input
                            className='button is-info'
                            type='submit'
                            value='Login'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
