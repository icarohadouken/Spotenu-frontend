import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    LandingPage
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/signup">

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