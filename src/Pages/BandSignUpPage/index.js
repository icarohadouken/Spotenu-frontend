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
import { useStyles } from './style'

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

const BandSignUpPage = () => {

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
        description: '',
        password: '',
        email: '',
        confirmPassword: '',
        showPassword: false
    })

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (form.password !== form.confirmPassword) {
            return resetForm()
        }

        const body = {
            name: form.name,
            nickname: form.nickname,
            description: form.description,
            password: form.password,
            email: form.email
        }

        axios
            .post("https://spotenu-back.herokuapp.com/band/signup", body)
            .then(response => {
                window.alert(response.data.message)
            })
            .catch(err => {
                window.alert(err)
                resetForm()
            })
    }

    return (
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
                        label="Description"
                        type="text"
                        name="description"
                        value={form.description}
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

export default BandSignUpPage