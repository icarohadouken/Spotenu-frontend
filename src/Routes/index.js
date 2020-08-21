import React, {useEffect} from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import UserLoginPage from '../Pages/UserLoginPage'
import LandingPage from '../Pages/LandingPage'
import UserSignUpPage from '../Pages/UserSignUpPage'
import BandLoginPage from '../Pages/BandLoginPage'
import BandSignUpPage from '../Pages/BandSignUpPage'
import HomePage from '../Pages/HomePage'
import SignUpAdminPage from '../Pages/SignUpAdminPage'

const Routes = () => {
   
    return (
        <BrowserRouter>
            <Switch>
                    <Route exact path="/">
                        <LandingPage />
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
                    <HomePage />
                </Route>

                <Route exact path="/home/signup/admin">
                    <SignUpAdminPage />
                </Route>



                <Route path="/">
                    Erro 404 - Página não encontrada
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes