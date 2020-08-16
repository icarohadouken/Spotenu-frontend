import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { useForm } from '../../Hooks/Form'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import musicImage from '../../images/principal.jpg'
import Typography from '@material-ui/core/Typography'
import { makeStyles} from "@material-ui/core/styles"

const Banner = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.img});
    background-position: 0%, 0%, 50%, 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`

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

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const LoginPage = () => {

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
            .post('https://cxngt6s9aj.execute-api.us-east-2.amazonaws.com/dev/user/login', body)
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
            <Banner img={musicImage}>
                <Content>
                    <Typography variant="h3">LOGIN</Typography>
                    <FormControl onSubmit={handleSubmit} className={classes.root}>
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
                    </FormControl>
                </Content>
            </Banner>
        </div>
    )
}

export default LoginPage