import React from 'react'
import {useHistory} from 'react-router-dom'
import musicImage from '../../images/principal.jpg'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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


const LandingPage = () => {
    const history = useHistory()
    const classes = useStyles();

    const goLogin = () => {
        history.push("/login")
    }

    const goSignUp = () => {
        history.push("/signup")
    }
    return (
        <div>
            <Banner img={musicImage}>
                <Content className={classes.root}>
                    <Typography variant="h3">SEJA BEM VINDO AO SPOTENU</Typography>
                    <Typography variant="subtitle1">O melhor lugar para ouvir suas músicas</Typography>
                    <div className={classes.root}>
                
                        <LoginButton variant="outlined" onClick={goLogin}>ENTRAR</LoginButton>
                        <Button variant="contained" color="secondary" onClick={goSignUp}>CADASTRE-SE</Button>
                    </div>
                    
                </Content>
            </Banner>
        </div>
    )
}

export default LandingPage