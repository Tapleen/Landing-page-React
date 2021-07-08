import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
// import Home from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    carouselCont: {
        position: "relative"
    },
    floatDiv: {
        position: "absolute",
        top: "1px",
        right: "1px",
        zIndex: "1"
    },
    mrgn5: {
      margin: "5px"
    }
});

export default function Example({items}){
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.carouselCont}>
                        <div className={classes.floatDiv} id="tapleen">
                            <Button variant="contained"> Sign In </Button>
                            <Button variant="contained" color="secondary"> Register </Button>
                        </div>
                        <Carousel
                            // IndicatorIcon={<Home/>}
                            autoPlay={false}
                            navButtonsAlwaysInvisible={true}
                        >
                            {
                                items && items.length > 0
                                ? items.map( (item, i) => <Item key={i} item={item} /> )
                                : null
                            }
                        </Carousel>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
