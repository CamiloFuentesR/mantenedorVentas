import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { HomeScreen } from '../components/home/HomeScreen'

export const AuthRouter = () => {
    const history = useHistory()
    localStorage.setItem('pag',history.location.pathname);
    return (
        <div className="auth__main" >
            <div className="auth__box-container ">
                <Switch>
                    <Route
                        exact
                        path="/home/auth/login"
                        component={LoginScreen}
                    />
                    <Route
                        exact
                        path="/home/auth/register"
                        component={RegisterScreen}
                    />
                    <Route
                        exact
                        path="/home"
                        component={HomeScreen}
                    />
                    {/* si un ruta no existe, entonces redirect */}
                    <Redirect to="/home" />
                </Switch>
            </div>

        </div>
    )
}
