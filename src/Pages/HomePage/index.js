import React from 'react'
import axios from 'axios'
import {useProtectedPage} from '../../Hooks/ProtectedPage'
import Admin from './Admin'

const HomePage = () => {
    useProtectedPage()

    const role = localStorage.getItem('role')

    if(role === 'ADMIN'){
        return (
            <div>
                <Admin />
            </div>
        )
    }else{
        return(
            <div>
                Home User normal
            </div>
        )
    }
    
}

export default HomePage