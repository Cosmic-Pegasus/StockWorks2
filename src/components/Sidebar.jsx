import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import { Button } from "@material-tailwind/react";

export default function Sidebar() {
    return (
        <main className="sidebar">

            <h1 className="s-title">
                <svg style={{width:"2rem"}} viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M466.63 332.141l-2.949-2.286c-22.823-17.687-55.664-13.527-73.352 9.296L168.406 625.474c-17.691 22.821-13.529 55.66 9.297 73.354l2.949 2.29c22.826 17.683 55.666 13.528 73.352-9.299l221.922-286.32c17.694-22.824 13.53-55.669-9.296-73.358z" fill="#E5594F" /><path d="M700.612 619.811L475.887 335.684c-17.915-22.648-50.795-26.486-73.444-8.571l-2.925 2.315c-22.649 17.915-26.489 50.793-8.574 73.442l224.724 284.125c17.91 22.649 50.796 26.488 73.445 8.573l2.925-2.317c22.65-17.911 26.489-50.797 8.574-73.44z" fill="#F39A2B" /><path d="M970.613 897.67H55.454c-25.734 0-46.588 23.407-46.588 52.283v3.736c0 28.876 20.854 52.284 46.588 52.284h915.16c25.734 0 46.59-23.408 46.59-52.284v-3.736c-0.001-28.876-20.856-52.283-46.591-52.283z" fill="#C45FA0" /><path d="M66.425 15.049h-3.736c-28.876 0-52.284 20.551-52.284 45.901v901.601c0 25.353 23.407 45.9 52.284 45.9h3.736c28.876 0 52.284-20.548 52.284-45.9V60.95c0-25.35-23.408-45.901-52.284-45.901z" fill="#4A5699" /><path d="M914.9 334.433l-2.91-2.346c-22.489-18.107-55.408-14.549-73.51 7.94L611.312 622.201c-18.113 22.491-14.556 55.41 7.938 73.517l2.905 2.347c22.494 18.107 55.408 14.546 73.52-7.941l227.169-282.18c18.106-22.49 14.546-55.403-7.944-73.511z" fill="#F0D043" /></svg>StockWorks</h1>
            <hr />

            <div className="sidenav-list">
                <Link to='/'> <li className="s-list-items">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                    </svg>

                    <span className="cap">Dashboard</span>

                </li></Link>
                <Link to='/stocks'> <li className="s-list-items">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                    </svg>

                    <span className="cap">Stocks</span>

                </li></Link>
                <Link to='/'><li className="s-list-items">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>

                    <span className="cap">Mutual Funds</span>

                </li></Link>
                <Link to='/stocks'><li className="s-list-items">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    <span className="cap">Nifty Stocks</span>

                </li></Link>  
                <li className="s-list-items">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>

                    <span className="cap">Index</span>

                </li>
                <li className="s-list-items">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>

                    <span className="cap">Profile</span>

                </li>
                <li className="s-list-items">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>

                    <span className="cap">Charts</span>

                </li>

                <Button color="green" className='my-5 side-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                    <p className="urbanist">NSE INDIA</p>
                </Button>

            </div>

        </main >
    )
}
