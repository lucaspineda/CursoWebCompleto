import './Main.css'
import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">

            <div className="mt-3 p-3">
            {props.children}
            </div>
        </main>
    </React.Fragment>