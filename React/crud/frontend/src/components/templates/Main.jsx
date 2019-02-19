import './Main.css'
import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>