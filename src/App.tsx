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

import { makeStyles } from "@mui/styles";
import { TransitionGroup } from "react-transition-group";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
    maxWidth: "1250px",
    minHeight: "100vh",
    backgroundColor: "rgb(216, 212, 212)",
  },
  noti: {
    position: "fixed",
    bottom: "20%",
    right: "15px",
    // display: "flex",
    // flexDirection: "column",
    // width: "30%",
  },
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
      <TransitionGroup>
        <Stack className={classes.noti}>
          {notiStack.map((i: IAlertItem, index: number) => {
            return (
              <Collapse key={index}>
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
              </Collapse>
            );
          })}
        </Stack>
      </TransitionGroup>

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
