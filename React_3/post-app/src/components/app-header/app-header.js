import React from 'react'

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
h1{
    font-size: 26px;
    color: ${props => props.colored ? 'red' : 'black'};
    :hover{
        color:blue;
    }
}
h2{
    font-size: 1.2rem;
    color: grey;
}
`

const AppStyleHeader = styled(Header)`

:hover{
    text-decoration: none;  
}
`

const AppHeader = () => {
    return (
        <AppStyleHeader as='a' className="d-flex flex-wrap  justify-content-between align-items-end" colored>
            <h1>David Piruzashvili</h1>
            <h2 className='lead'> 5 записей, из них понравилось 0</h2>
        </AppStyleHeader>
    )
}

export default AppHeader;