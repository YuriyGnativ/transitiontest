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
import * as sad from "@mui/material/";

import { makeStyles } from "@mui/styles";
import {
  CSSTransition,
  TransitionGroup,
  Transition,
} from "react-transition-group";

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
    padding: "15px",
    // transition: "min-height 0.5s",
  },
  item: {
    ["&-enter"]: {
      opacity: 0,
    },
    ["&-enter-active"]: {
      opacity: 1,
      transition: "opacity 200ms",
    },
    ["&-exit"]: {
      opacity: 1,
    },
    ["&-exit-active"]: {
      opacity: 0,
      transition: "opacity 200ms",
    },
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
      <div className={classes.notiStack}>
        <TransitionGroup>
          {notiStack.map((i: IAlertItem, index: number) => {
            return (
              <Collapse
                key={index}
                timeout={500}
                // classNames="item"
                in={true}
              >
                <TransitionGroup>
                  <Slide in={true} direction="up" timeout={500}>
                    <Alert
                      className={classes.alertclass}
                      // icon={<CheckIcon fontSize="inherit" />}
                      onClose={() => {}}
                      key={index}
                      severity="success"
                    >
                      <div>{i.text}</div>
                    </Alert>
                  </Slide>
                </TransitionGroup>
              </Collapse>
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
        </TransitionGroup>
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
