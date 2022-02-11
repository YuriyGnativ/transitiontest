import React, { useState } from "react";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import Slide from "@mui/material/Slide";
import { Collapse } from "@mui/material";
import "./items.css";

import { makeStyles } from "@mui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
    maxWidth: "1250px",
    minHeight: "100vh",
    backgroundColor: "rgb(216, 212, 212)",
    // transition: "0.2s easy",
  },
  notiStack: {
    position: "fixed",
    bottom: "20%",
    right: "15px",
    minHeight: 0,
    overflow: "hidden",
    backgroundColor: "black",
    width: "30%",
    transition: "min-height 0.5s",
  },
  // itemContainer: {
  //   height: "auto",
  //   overflow: "visible",
  //   transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //   transitionProperty: "height,    transition-duration: 300ms",
  //   transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  //   transitionDelay: "0ms",
  // },
  alertclass: {
    transition: ".5s ease",
  },
}));

export interface IAlertItem {
  id: number;
  text: string;
}

function App() {
  const classes = useStyles();
  const [notiStack, setNoti] = useState<Array<IAlertItem>>([]);
  return (
    <div className={`app-container ${classes.root}`}>
      <button
        onClick={() => {
          setNoti([
            ...notiStack,
            {
              id: Math.round(Math.random() * 10000),
              text: faker.lorem.paragraph(),
            },
          ]);
        }}
      >
        add
      </button>
      <TransitionGroup></TransitionGroup>
      <div className={classes.notiStack}>
        <div style={{ maxHeight: "100%" }}>
          {notiStack.map((i: IAlertItem, index: number) => {
            return (
              <Slide in={true} direction="up" timeout={500}>
                <Alert
                  className={classes.alertclass}
                  icon={<CheckIcon fontSize="inherit" />}
                  key={index}
                  severity="success"
                >
                  {i.text}
                </Alert>
              </Slide>
              // <Collapse in={true}>

              // </Collapse>
              // <div
              //   style={{
              //     minHeight: 0,
              //     height: "auto",
              //     transition: "height 0.5s",
              //     overflow: "visible",
              //   }}
              // >
              //   <div
              //     style={{
              //       display: "flex",
              //       width: "100%",
              //     }}
              //   >
              //     <div
              //       style={{
              //         width: "100%",
              //       }}
              //     >

              //     </div>
              //   </div>
              // </div>
              // <div className={classes.itemContainer}>
              //   <div>
              //   </div>
              // </div>
              //             <CSSTransition key={index} timeout={500} classNames="item">
              // </CSSTransition>
            );
          })}
        </div>
      </div>

      {/* <Stack sx={{ width: "20%" }} spacing={2} className={classes.noti}> */}
      {/* <Alert
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" />,
          }}
        >
          This is a success alert — check it out!
        </Alert>
        <Alert icon={false} severity="success">
          This is a success alert — check it out!
        </Alert> */}
      {/* </Stack> */}
    </div>
  );
}

export default App;
