import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  useMediaQuery,
  Hidden,
  IconButton,
} from "@material-ui/core";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import swiss from "../../assets/swissKnife.svg";
import access from "../../assets/extendAccess.svg";
import engagement from "../../assets/increaseEngagement.svg";

import integrationAnimation from "../../animations/integrationAnimation/data.json";

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
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: integrationAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

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
              to="/custom-software"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <img src={backArrow} alt="Backward arrow" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <img src={forwardArrow} alt="forward Arrow" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{margin:"15em 0"}}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align={matchesMD?"center":undefined} gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD?"center":undefined} variant="body1">
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography variant="body1" align={matchesMD?"center":undefined}>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align={matchesMD?"center":"right"} gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1"  align={matchesMD?"center":"right"}>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography variant="body1"  align={matchesMD?"center":"right"}>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{marginBottom:'15em'}}
      >
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army kife" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center" style={{margin:matchesMD?"10em 0":0}}>
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img src={access} alt="Access" style={{ maxWidth:matchesMD? "20em":"28em" }} />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="swiss army kife" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileApps;
