import React from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import { Grid,Button,Typography } from "@material-ui/core";
import ButtonArrow from './ButtonArrow'

const useStyles = makeStyles((theme) => ({
    animation:{
        maxWidth:"50em",
        minWidth:"21em",
        marginTop:"2em",
        marginLeft:"10%",
        [theme.breakpoints.down("sm")]:{
            maxWidth:"30em",
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        backgroundColor:theme.palette.common.orange,
        borderRadius:50,
        height:45,
        width:145,
        marginRight:40,
        "&:hover":{
            backgroundColor:theme.palette.secondary.dark,
        }
    },
    learnButton:{
        borderColor:theme.palette.common.blue,
        color:theme.palette.common.blue,
        borderWidth:2,
        textTransform:"none",
        borderRadius:50,
        fontFamily:"Roboto",
        fontWeight:"bold",
        fontSize:"0.9rem",
        height:45,
        width:145,
    },
    buttonContainer:{
        marginTop:"1em",
    },
    mainContainer:{
        marginTop:"5em",
        [theme.breakpoints.down("md")]:{
            marginTop:"3em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop:"2em"
        },
    }
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme=useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    textContainer:{
        minWidth:"21.5em",
        marginLeftt:"1em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:0,
        }
    }
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid item sm>
            <Typography align="center" variant="h2" className={classes.textContainer}>
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid container justifyContent="center" className={classes.buttonContainer}>
                <Grid item >
                    <Button variant="contained" className={classes.estimateButton}>Free Estimate</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" className={classes.learnButton}>
                       <span style={{marginRight:10}    }> Learn More</span>
                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
