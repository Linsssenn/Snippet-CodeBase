import React from "react";
import { Divider, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Searchbar from "../components/Searchbar";
import Navigation from "../components/Navigation";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Searchbar />
      <Divider />
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography variant="h5" component="h5">
            Recently Added
          </Typography>
          <Navigation />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
