import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import LandingPage from '../Pages/LandingPage'
import SignUpPage from '../Pages/SignUpPage'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
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