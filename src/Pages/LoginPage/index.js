import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import {useForm} from '../../Hooks/Form'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'

const LoginPage = () => {

    const history = useHistory()

    const {
        form,
        onChange,
        clickShowPassword,
        mouseDownPassword,
        resetForm
    } = useForm({
        login: '',
        password: '',
        showPassword: false
    })

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const body = {
            login: form.login,
            password: form.password
        }

        axios
            .post('https://cxngt6s9aj.execute-api.us-east-2.amazonaws.com/dev/user/login', body)
            .then(response => {
                localStorage.setItem('token', response.data.accessToken)
                history.push("/home")
            })
            .catch(err => {
                resetForm()
            })
    }
    return(
        <div>
            <FormControl onSubmit={handleSubmit}>
                <TextField
                    required
                    variant="outlined"
                    label="Email or nickname"
                    type="email"
                    name="login"
                    value={form.login}
                    onChange={handleInputChange}
                />

                <TextField
                    required
                    required
                    variant="outlined"
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                />

                <Button onClick={handleSubmit}>Entrar</Button>
            </FormControl>
        </div>
    )
}

export default LoginPage