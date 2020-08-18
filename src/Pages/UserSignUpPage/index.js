import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { useForm } from '../../Hooks/Form'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles"
import HeroBanner from '../../Components/HeroBanner'
import {useStyles} from './style'

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

const UserSignUpPage = () => {

    const classes = useStyles()

    const history = useHistory()

    const {
        form,
        onChange,
        clickShowPassword,
        mouseDownPassword,
        resetForm
    } = useForm({
        name: '',
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false
    })

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(form.password !== form.confirmPassword){
            return resetForm()
        }

        const body = {
            name: form.name,
            nickname: form.nickname,
            email: form.email,
            password: form.password
        }

        axios
            .post("https://spotenu-back.herokuapp.com/user/signup", body)
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
            <HeroBanner />

            <Content>
                <Typography variant="h4">CADASTRO</Typography>
                <FormControl onSubmit={handleSubmit} className={classes.margin}>
                    <Input
                        required
                        variant="filled"
                        label="Name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                    />
                    <Input
                        required
                        variant="filled"
                        label="Nickname"
                        type="text"
                        name="nickname"
                        value={form.nickname}
                        onChange={handleInputChange}
                    />
                    <Input
                        required
                        variant="filled"
                        label="Email"
                        type="email"
                        name="email"
                        value={form.email}
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

                    <Input
                        required
                        variant="filled"
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleInputChange}
                    />

                    <LoginButton variant="outlined" onClick={handleSubmit}>CADASTRAR</LoginButton>
                </FormControl>
            </Content>
        </div>
    )
}

export default UserSignUpPage