import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";

import ButtonArrow from "../Home/ButtonArrow";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "8em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { setValue, setSelectedIndex } = props;
  return (
    <Grid container direction="column">
      <Grid item   style={{ marginLeft: matchesSM ? 0 : "5em",marginTop:matchesSM?"1em":"2em" }}>
        <Typography
          variant="h2"
          gutterBottom
        
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/* Custom Software block */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Custom Software Devleopment</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy,Save Time,Save Money,
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions,from investigation to{" "}
              <span className={classes.spanText}>celebration</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/custom-software"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="Custom software icon"
              src={customSoftwareIcon}
              width="250em"
              style={{ marginRight: matchesSM ? 0 : "5em" }}
            />
          </Grid>
        </Grid>
        {/* -----iOS/Mobile app developemet----- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              marginLeft: matchesSM ? 0 : "5em",
            }}
          >
            <Typography variant="h4">iOS/Android App Devleopment</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Fuctionality,Extend Access,Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standlone app
              {matchesSM ? null : <br />}
              with either mobile platform.
              <span className={classes.spanText}>celebration</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/mobile-apps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="Mobile app icon"
              src={mobileAppIcon}
            />
          </Grid>
        </Grid>
        {/* ----Websites Block----- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
          style={{ marginBottom: "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Website Devleopment</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More,Discover More,Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines,built for speed.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="Website icon"
              src={websiteIcon}
              width="250em"
              style={{ marginRight: matchesSM ? 0 : "5em" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
