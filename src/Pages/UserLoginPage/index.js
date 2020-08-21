import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { useForm } from '../../Hooks/Form'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import HeroBanner from '../../Components/HeroBanner'
import {useStyles} from './style'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

const Content = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 100%;
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

    const pressEnter = (event) => {
        if (event.keyCode === 13) {
            login();
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        
    }

    const login = () => {
        const body = {
            login: form.login,
            password: form.password
        }

        axios
            .post('https://spotenu-back.herokuapp.com/user/login', body)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('role', response.data.role)
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
                <Typography variant="h4">USUÁRIO LOGIN</Typography>
                <FormControl variant="fiiled" className={classes.margin}>
                    
                    <TextField
                        className={classes.bgWhite}
                        required
                        variant="filled"
                        label="Email ou nickname"
                        type="email"
                        name="login"
                        value={form.login}
                        onChange={handleInputChange}
                    />
                    <TextField
                        className={classes.bgWhite}
                        variant="filled"
                        label="Senha"
                        id="password"
                        name='password'
                        type={form.showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={handleInputChange}
                        onKeyUp={pressEnter}
                    />


                    <LoginButton variant="outlined" onClick={login}>Entrar</LoginButton>

                    <Typography
                        onClick={() => history.push("/user/signup")}
                        className={classes.register}
                    >
                        Não possui cadastro? Clique aqui.
                    </Typography>

                </FormControl>
            </Content>
        </div>
    )
}

export default UserLoginPage