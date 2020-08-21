import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export const useProtectedPage = () => {
    const history = useHistory()
    const token = localStorage.getItem('token')
    

    useEffect(() => {
        
        if(!token){
            history.replace('/')    
        }
    }, [])
}