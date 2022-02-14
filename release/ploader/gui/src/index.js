import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Accordion,
  Dialog,
  DialogContent,
  Typography,
  AccordionSummary,
  Icon,
  AccordionDetails,
  Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function ButtonGroup(props) {
  return (
    <Accordion elevation={props.elevated ? 3 : 1}>
      <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {props.items.title}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Click to expand group
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Object.entries(props.items).map(([key, value]) => {
          if (value.isButton) {
            return (
              <Button key={key} onClick={value.onClick} sx={{ my: 1 }}>
                {value.title}
              </Button>
            );
          } else if (key !== "title") {
            return (
              <ButtonGroup
                key={key}
                items={value}
                elevated={!props.elevated}
                sx={{ my: 1 }}
              />
            );
          }
        })}
      </AccordionDetails>
    </Accordion>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (window.blooketUtility?.api._gui.shouldOpen) {
        window.blooketUtility.api._gui.shouldOpen = false;
        setOpen(true);
      }
    }, 10);
  }, []);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        {Object.entries(window.blooketUtility.api.gui).map(([key, value]) => {
          if (value.isButton) {
            return (
              <Button key={key} onClick={value.onClick} sx={{ my: 1 }}>
                {value.title}
              </Button>
            );
          } else if (key !== "title") {
            return (
              <ButtonGroup
                key={key}
                items={value}
                elevated={false}
                sx={{ my: 1 }}
              />
            );
          }
        })}
      </DialogContent>
    </Dialog>
  );
}

document.body.appendChild(document.createElement("bu-gui"));

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiIcon: {
      defaultProps: {
        baseClassName: "material-icons-round",
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          minWidth: "90vh",
          maxWidth: "90vh",
        },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector("bu-gui")
);
