import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import analytics from "../../assets/analytics.svg";
import seo from "../../assets/seo.svg";
import outreach from "../../assets/outreach.svg";
import ecommerce from "../../assets/ecommerce.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em",
    },
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  paraContainer: {
    maxWidth: "30em",
  },
}));

const Websites = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { setValue, setSelectedIndex } = props;

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMD ? "center" : undefined}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/mobile-apps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <img src={backArrow} alt="Back to services page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
            >
              <img src={forwardArrow} alt="forward Arrow" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container direction={matchesSM?"column":"row"} alignItems="center" style={{marginTop:"15em"}}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align={matchesSM?"center":undefined}>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img src={analytics} alt="img" style={{ marginLeft:matchesSM?0: "-2.7em" }}  />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paraContainer}> 
          <Typography variant="body1" align={matchesSM?"center":"undefined"} >
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM?"column":"row"}
        alignItems="center"
        justifyContent="flex-end"
        style={{margin:"15em 0"}}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align={matchesSM?"center":undefined}>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="img" style={{ marginLeft:matchesSM?0: "-2.7em" }}  />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM?0: "1rem" }} className={classes.paraContainer}>
          <Typography variant="body1" align={matchesSM?"center":"undefined"}>
            It’s no secret that people like to shop online.
          </Typography>
          <Typography variant="body1" align={matchesSM?"center":"undefined"}>
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM?"column":"row"}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align={matchesSM?"center":undefined}>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="img" style={{ marginLeft:matchesSM?0: "-2.7em" }}  />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM?0: "1rem" }} className={classes.paraContainer} >
          <Typography variant="body1" align={matchesSM?"center":"undefined"}>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM?"column":"row"}
        alignItems="center"
        justifyContent="flex-end"
        style={{margin:"15em 0"}}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center" align={matchesSM?"center":undefined}>
                Search Engine <br/>Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="img" style={{ marginLeft:matchesSM?0: "-2.7em" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM?0: "1rem" }} className={classes.paraContainer} >
          <Typography variant="body1" align={matchesSM?"center":"undefined"}>
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography variant="body1" align={matchesSM?"center":"undefined"}>
          If you’re like us, probably never.
          </Typography>
          <Typography variant="body1" align={matchesSM?"center":"undefined"} >
          Customers don’t go there either, so we make sure your website is designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Websites;
