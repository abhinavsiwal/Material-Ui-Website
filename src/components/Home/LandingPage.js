import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import revolutionBackground from "../../assets/repeatingBackground.svg";
import infoBackground from "../../assets/infoBackground.svg";

import CallToAction from "../UI/CallToAction";

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
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "80%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "80%",
    width: "100%",
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const {setValue,setSelectedIndex}=props;

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
                <Button
                  variant="contained"
                  component={Link}
                  to="/estimate"
                  className={classes.estimateButton}
                  onClick={()=>setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnButtonHero}
                  component={Link}
                  to="/revolution"
                  onClick={()=>setValue(2)}
                >
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
          <Button
            variant="outlined"
            className={classes.learnButton}
            component={Link}
            to="/custom-software"
            onClick={()=>{setValue(1);setSelectedIndex(1)}}
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
          <Button
            variant="outlined"
            className={classes.learnButton}
            component={Link}
            to="/mobile-apps"
            onClick={()=>{setValue(1);setSelectedIndex(2)}}
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
          <Button
            variant="outlined"
            className={classes.learnButton}
            component={Link}
            to="/websites"
            onClick={()=>{setValue(1);setSelectedIndex(3)}}
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
          <img className={classes.icon} alt="Website icon" src={websiteIcon} />
        </Grid>
      </Grid>
      {/* -----Revolution block----- */}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100em", marginTop: "2em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    receipe for revolution.
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    component={Link}
                    to="/revolution"
                  >
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/* -----Information block */}
      <Grid item>
        <Grid container style={{ height: "80em" }} alignItems="center">
          <Grid
            item
            container
            style={{ position: "absolute" }}
            direction={matchesSM ? "column" : "row"}
          >
            <Grid item sm style={{ marginLeft: matchesSM ? "2em" : "5em" }}>
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    component={Link}
                    to="/about"
                    onClick={()=>setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesSM ? "2em" : "5em",
                textAlign: "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Say hello! </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    component={Link}
                    to="/contact"
                    onClick={()=>setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
      {/* ----Call to Action----- */}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
