import React from 'react'
import { Link } from 'react-router-dom';



export const NavBar = () => {
const pag = localStorage.getItem('pag');

    return (
        <>
            <nav className="_home_nav nav nav-bar bg-dark sticky-top">
                    {
                        pag !== '/home' &&
                <div className="_auth_house_btn btn btn-sm">
                    <Link to={"auth/home"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="_nav_btn-home  icon icon-tabler icon-tabler-smart-home" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fcf9fa" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
                    <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
                </svg>
                    </Link>
                        <span className="_home_btn_span">HOME</span>
                </div>
                    }
                <div className="dropdown btn-login">
                    <span className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-right" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="10" y1="12" x2="20" y2="12" />
                            <line x1="6" y1="18" x2="20" y2="18" />
                        </svg>
                    </span>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to={'/home/auth/login'} className="dropdown-item">Login</Link>
                        <Link to={'/home/auth/register'} className="dropdown-item">Register</Link>
                    </div>
                </div>

            </nav>

        </>
    );
}