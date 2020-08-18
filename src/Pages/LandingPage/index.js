import React from 'react'
import HeroBanner from '../../Components/HeroBanner'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Content = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 100%;
`

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


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


const LandingPage = () => {
    const history = useHistory()

    const classes = useStyles();

    const goLoginUser = () => {
        history.push("/user/login")
    }

    const goLoginBand = () => {
        history.push("/band/login")
    }
    return (
        <div>
            <HeroBanner>                    
            </HeroBanner>

            <Content className={classes.root}>
                <Typography variant="h3">SEJA BEM VINDO AO SPOTENU</Typography>
                <Typography variant="subtitle1">O melhor lugar para ouvir suas músicas</Typography>
                <div className={classes.root}>

                    <Button variant="contained" color="secondary" onClick={goLoginUser}>USUÁRIO</Button>
                    <LoginButton variant="outlined" onClick={goLoginBand}>BANDA</LoginButton>
                </div>
            </Content>
        </div>
    )
}

export default LandingPage