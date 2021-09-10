import React from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Button, Typography, useMediaQuery } from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from '../../assets/websiteIcon.svg'

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  buttonContainer: {
    marginTop: "1em",
  },
  textContainer: {
    minWidth: "21.5em",
    marginLeftt: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  spanText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
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
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* -----Hero Block----- */}
      <Grid item style={{ width: "100%" }}>
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid item sm>
            <Typography
              align="center"
              variant="h2"
              className={classes.textContainer}
            >
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/* -----Services Block----- */}
      {/* -----Custom Software----- */}
      <Grid
        container
        direction="row"
        className={classes.serviceContainer}
        justifyContent={matchesSM ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
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
          <Button variant="outlined" className={classes.learnButton}>
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
          />
        </Grid>
      </Grid>
      {/* -----iOS/Mobile app developemet----- */}
      <Grid
        container
        direction="row"
        className={classes.serviceContainer}
        justifyContent={matchesSM ? "center" : "flex-end"}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
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
          <Button variant="outlined" className={classes.learnButton}>
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
        justifyContent={matchesSM ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h4">Website Devleopment</Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Reach More,Discover More,Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimized for Search Engines,built for speed.
          </Typography>
          <Button variant="outlined" className={classes.learnButton}>
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
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
