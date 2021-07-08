import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core'

const useStyles = makeStyles({
    itemCont: {
        position: "relative"
    },
    reduceOpac: {
        opacity: 0.6,
        height: "30em"
    },
    imageText: {
        position: "absolute",
        top:"40%",
        left: "10%",
        width: "400px"
    }
});

export default function Item({item}){
    const classes = useStyles();
    return (
        <Paper>
            <Card className={classes.itemCont}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={item.name}
                        height="140"
                        image={item.img}
                        title={item.name}
                        className={classes.reduceOpac}
                    />
                    <CardContent>
                        <div className={classes.imageText}>
                            <Typography gutterBottom variant="h4" component="h2">
                                {item.description}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
    )
}
