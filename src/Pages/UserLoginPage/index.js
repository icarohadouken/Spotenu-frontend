import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { useForm } from '../../Hooks/Form'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { makeStyles} from "@material-ui/core/styles"
import HeroBanner from '../../Components/HeroBanner'
<<<<<<< HEAD:src/Pages/UserLoginPage/index.js
import {useStyles} from './style'
=======
>>>>>>> 893a57cd34df7a84224ac81a42ec38a98b5ac36c:src/Pages/LoginPage/index.js

const Content = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 100%;
`

const Input = styled(TextField)`
    &&{
        background-color: white;
    }
`

const LoginButton = styled(Button)`
    &&{
        color: #fff;
        border-color: #fff;
    }
    :hover{
        border-color: #2d3e4f;
        background-color: #2d3e4f;
    }
`


const UserLoginPage = () => {

    const classes = useStyles()

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
        const { value, name } = event.target

        onChange(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const body = {
            login: form.login,
            password: form.password
        }

        axios
            .post('https://spotenu-back.herokuapp.com/user/login', body)
            .then(response => {
                localStorage.setItem('token', response.data.accessToken)
                history.push("/home")
            })
            .catch(err => {
                resetForm()
            })
    }
    return (
        <div>
            <HeroBanner>
                
            </HeroBanner>

            <Content>
<<<<<<< HEAD:src/Pages/UserLoginPage/index.js
                <Typography variant="h4">USUÁRIO LOGIN</Typography>
                <FormControl onSubmit={handleSubmit} className={classes.margin}>
=======
                <Typography variant="h4">LOGIN</Typography>
                <FormControl onSubmit={handleSubmit} className={classes.root}>
>>>>>>> 893a57cd34df7a84224ac81a42ec38a98b5ac36c:src/Pages/LoginPage/index.js
                    <Input
                        required
                        variant="filled"
                        label="Email or nickname"
                        type="email"
                        name="login"
                        value={form.login}
                        onChange={handleInputChange}
                    />

                    <Input
                        required
                        variant="filled"
                        label="Password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                    />

                    <LoginButton variant="outlined" onClick={handleSubmit}>Entrar</LoginButton>
<<<<<<< HEAD:src/Pages/UserLoginPage/index.js

                    <Typography
                        onClick={() => history.push("/user/signup")}
                        className={classes.register}
                    >
                        Não possui cadastro? Clique aqui.
                    </Typography>

=======
>>>>>>> 893a57cd34df7a84224ac81a42ec38a98b5ac36c:src/Pages/LoginPage/index.js
                </FormControl>
            </Content>
        </div>
    )
}

export default UserLoginPage