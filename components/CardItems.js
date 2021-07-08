import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core'

const useStyles = makeStyles({
    activeCard: {
        color: "#fff",
        background: "#224317"
    }
});

export default function Item({item, cardSelected}){
    const classes = useStyles();

    return (
        <Paper elevation={4}>
            <Card
                className={cardSelected === item.id? classes.activeCard :""}
            >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h1">
                            {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
    )
}
