import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import UserLoginPage from '../Pages/UserLoginPage'
import LandingPage from '../Pages/LandingPage'
import UserSignUpPage from '../Pages/UserSignUpPage'
import BandLoginPage from '../Pages/BandLoginPage'
import BandSignUpPage from '../Pages/BandSignUpPage'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>

                <Route exact path="/user/login">
                    <UserLoginPage />
                </Route>
                <Route exact path="/user/signup">
                    <UserSignUpPage />
                </Route>

                <Route exact path="/band/login">
                    <BandLoginPage />
                </Route>

                <Route exact path="/band/signup">
                    <BandSignUpPage />
                </Route>

                <Route exact path="/home">
                    
                </Route>

                <Route path="/">
                    Erro 404 - Página não encontrada
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes