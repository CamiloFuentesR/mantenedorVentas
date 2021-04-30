import React from 'react'
import { Link } from 'react-router-dom';



export const NavBar = () => {
  

    return (
        <>


            {/*  <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to={'/auth/login'} className="dropdown-item">Login</Link>
                    <Link to={'/auth/register'} className="dropdown-item">Register</Link>
                </div>
            </div> */}

            <nav className="_home_nav bg-dark sticky-top">
                <div class="dropdown btn-login">
                        <span className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="10" y1="12" x2="20" y2="12" />
                                <line x1="6" y1="18" x2="20" y2="18" />
                            </svg>
                        </span>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to={'/auth/login'} className="dropdown-item">Login</Link>
                            <Link to={'/auth/register'} className="dropdown-item">Register</Link>
                        </div>
                </div>

            </nav>

        </>
    );
}