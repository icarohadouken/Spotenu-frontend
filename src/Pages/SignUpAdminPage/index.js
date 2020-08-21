import React from 'react'
import AdminNav from '../../Components/AdminNav'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useForm } from '../../Hooks/Form'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { useStyles } from './style'
import FormControl from '@material-ui/core/FormControl';

const SignUpAdminPage = () => {
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
        confirmPassword: ''
    })

    const token = localStorage.getItem('token')

    const classes = useStyles()

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(name, value)
    }

    const pressEnter = (event) => {
        if (event.keyCode === 13) {
            signUp()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const signUp = () => {
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
            .post('https://spotenu-back.herokuapp.com/user/signup/admin', body, {
                headers: {
                    Authorization: token
                }
            })
            .then(response => {
                console.log(response.data)
                resetForm()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <AdminNav />

            <Container>
                <Typography variant="h3" align="center">Criar administrador</Typography>
                <form onSubmit={handleSubmit}>

                    <FormControl fullWidth className={classes.margin}>

                    <TextField
                        variant="outlined"
                        label="Admin's name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        
                    />

                    <TextField
                        variant="outlined"
                        label="Admin's Nickname"
                        type="text"
                        name="nickname"
                        value={form.nickname}
                        onChange={handleInputChange}
                        
                    />

                    <TextField
                        variant="outlined"
                        label="Admin's Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        
                    />

                    <TextField
                        variant="outlined"
                        label="Admin's Password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        
                    />

                    <TextField
                        variant="outlined"
                        label="Confirm Password"
                        type="Password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleInputChange}
                        onKeyUp={pressEnter}
                        
                    />

                    <Button fullWidth variant="outlined" onClick={signUp}>CADASTRAR</Button>

                    </FormControl>

                </form>

               


            </Container>

        </div>
    )
}

export default SignUpAdminPage