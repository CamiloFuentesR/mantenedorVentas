import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router,Redirect,Switch} from 'react-router-dom'
import { VentasIndex } from '../components/ventas/VentasIndex'
import { startChecking } from '../redux/actions/authActions'
import { AuthRouter } from './AuthRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'



export const AppRouter = (store) => {
    const dispatch = useDispatch()
    // const state = useSelector(state => state.state)
    const {uid} = useSelector(state => state.auth)
    useEffect(() => {
        
        dispatch(startChecking())
    }, [dispatch]);


    
    return (
             <Router>
            <>
                <Switch>
                    <PublicRouter
                        path="/home"
                        component={AuthRouter}
                        isAuthenticated={!!uid}
                    />
                    <PrivateRouter
                        exact
                        path="/user"
                        component={VentasIndex}
                        isAuthenticated={!!uid}
                    />
                    <Redirect to="/user" />
                </Switch>
            </>
        </Router>
    )
}
