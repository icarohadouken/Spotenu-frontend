import React from 'react'
import styled from 'styled-components'
import musicImage from '../../images/principal.jpg'

const Banner = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.img});
    background-position: 0%, 0%, 50%, 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`

const HeroBanner = () => {
    
    return(
        <Banner img={musicImage}>
                
        </Banner>
    )
}

export default HeroBanner