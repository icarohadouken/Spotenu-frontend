import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardBand from '../../../Components/CardBands'
import AdminNav from '../../../Components/AdminNav'
import Container from '@material-ui/core/Container'
import { useStyles } from './style'
import Grid from '@material-ui/core/Grid'

const Admin = () => {

    const [bandsList, setBandsList] = useState([])

    const token = localStorage.getItem('token')

    const classes = useStyles()

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

    return (
        <div>
            <AdminNav />
            <Container>
                <Grid container>

                    {bandsList.map((band) => {
                        return (
                            <Grid item md={6} xs={12} className={classes.control}>
                                <CardBand
                                    name={band.name}
                                    nickname={band.nickname}
                                    authorization={band.authorization}
                                    onClick={() => approveBand(band.id)}

                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default Admin