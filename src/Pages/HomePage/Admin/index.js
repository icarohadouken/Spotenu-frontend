import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CardBand from '../../../Components/CardBands'
import Container from '@material-ui/core/Container'

const Admin = () => {

    const [bandsList, setBandsList] = useState([])

    const token = localStorage.getItem('token')

    useEffect(() => {
        getBands()
    }, [])

    const getBands = () => {
        axios
            .get('https://spotenu-back.herokuapp.com/band', 
            {
                headers: {
                    authorization: token
                }
            })
            .then(response => {
                setBandsList(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const approveBand = (id) => {
        axios
            .put(`https://spotenu-back.herokuapp.com/band/approve?id=${id}`, null, {
                headers: {
                    authorization: token
                }
            })
            .then(response => {
                getBands()
                console.log(response)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return(
        <div>
            <Container>
                {bandsList.map((band) => {
                    return(
                        <CardBand
                            name={band.name}
                            nickname={band.nickname}
                            authorization={band.authorization}
                            onClick={() => approveBand(band.id)} 
                        />
                    )
                })}
            </Container>
        </div>
    )
}

export default Admin