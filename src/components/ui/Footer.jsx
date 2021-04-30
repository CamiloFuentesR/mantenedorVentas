import React from 'react'
import useOnScreen from '../../hooks/useOnScreen';

export const Footer = () => {

    const [setRef, visible] = useOnScreen({ threshold: .5 });

    return (
        <>
            <footer className="_Footer ">
                <div className="_footer_left">

                </div>
                <div className="_footer_right">

                </div >
                <div className="_footer_down ">
                    {visible
                        ?
                        <>
                            <div className="_footer_down_left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler animate__animated animate__fadeIn icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg></div>
                            <div className="_footer_down_middle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler animate__animated animate__fadeIn icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                                </svg>
                            </div>
                            <div className="_footer_down_right">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler animate__animated animate__fadeIn icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="4" y="4" width="16" height="16" rx="4" />
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                </svg>
                            </div>
                        </>
                        :
                        <div ref={setRef}></div>
                    }
                </div>
            </footer>
        </>
    )
}
