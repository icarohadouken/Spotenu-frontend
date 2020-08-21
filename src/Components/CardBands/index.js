import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CardBands = (props) => {
    return(
        <div>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>{props.name}</Typography>
                    <Typography variant="h5" component="h2">{props.nickname}</Typography>
                </CardContent>

                <CardActions>
                    {props.authorization === 0 ? 
                    <Button size="small" onClick={props.onClick}>Aprovar</Button> : 
                    <Button size="small" disabled>Banda Aprovada</Button>}
                    
                </CardActions>

            </Card>
        </div>
    )
}

export default CardBands