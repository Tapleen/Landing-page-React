import Head from 'next/head'
import { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import  { Container, Grid, Typography } from '@material-ui/core';

import Carousel from '../components/Carousel'
import CardItems from '../components/CardItems';
import cardData from "/public/assets/json/carditems.JSON";
import carouselData from "/public/assets/json/carouselData.JSON";

const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    mrgnT25: {
      margin: "100px 40px"
    },
    mrgn15: {
      margin: "15px"
    },
    footer: {
      padding: "20px 5px",
      color: "#fff",
      background: "#224317",
      borderRadius: "2px"
    }
});

export default function Home() {
  const classes = useStyles();
  const [cardSelected, setCardSelected] = useState("-1");

  return (
    <Fragment>
      <Head>
        <title>Home App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Container fixed>
          <main>
            <div className={classes.root}>
              <Carousel
                items= {carouselData}
              />
              <div className={classes.mrgnT25}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={8}
                >
                  {cardData.map( (item) => (
                    <Grid item xs={12} md={4}>
                      <div onClick={() => setCardSelected(item.id)}>
                        <CardItems
                          key={Number(item.id)}
                          item={item}
                          cardSelected={cardSelected}
                        /> 
                      </div>
                      </Grid>
                  ))}
                </Grid>
              </div>
            </div>
        </main>
          <footer className={classes.footer}>
            <Typography>
              Developed by tapleen kaur using next.js, react.js and material-ui
            </Typography>
          </footer>
        </Container>
    </Fragment>
  )
}
