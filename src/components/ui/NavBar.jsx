import React from 'react'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { Link } from 'react-router-dom';



export const NavBar = () => {
    const handleClickLogin = () => {

    }

    return (
        <>
            <div className="container col-12 sticky-top">
                <div className="row">
                    <nav className="navbar bg-dark sticky-top col-12">
                        <span
                            className="text-white col-10 "
                            onClick={handleClickLogin}
                        >Camilo</span>
                        <Link 
                            to={'/auth/home'}
                            className={'col-1 '}>
                         <SystemUpdateAltIcon
                            style={{color: 'white', fontSize: '31px'}}
                        />
                        </Link>
                        <Link to={'/auth/login'}>
                            <span className="material-icons text-white btn col-1 ">login</span>
                        </Link>
                    </nav>
                </div>

            </div>
        </>
    );
}