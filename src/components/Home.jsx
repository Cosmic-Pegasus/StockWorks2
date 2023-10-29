import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Dash from './Dash'
import { Footer } from './Footer'
import Dash2 from './Dash2'

export default function Home() {
    return (
        <>
            <Navbar b1={"Dashboard"}/>
            <Dash2 />
            <Sidebar />

        </>
    )
}
