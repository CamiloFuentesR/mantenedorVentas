import React, { useState } from 'react'
import {BrowserRouter as Router,Redirect,Switch} from 'react-router-dom'
import { Adentro } from '../components/Adentro'
import { AuthRouter } from './AuthRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'



export const AppRouter = (store) => {

    // const state = useSelector(state => state.state)
    const [login] = useState(false)


    return (
             <Router>
            <>
                <Switch>
                    <PublicRouter
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={login}
                    />
                    <PrivateRouter
                        exact
                        path="/adentro"
                        component={Adentro}
                        isAuthenticated={login}
                    />
                    <Redirect to="/adentro" />
                </Switch>
            </>
        </Router>
    )
}
