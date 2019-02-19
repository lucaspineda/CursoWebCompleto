import React, {Fragment} from 'react'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
                React.Children.map(props.children, child =>
                    
                React.cloneElement(child, {...props, ...child.props}))
            }
        </ul>
    </div>