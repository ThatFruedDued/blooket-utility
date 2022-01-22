import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  Icon,
  AccordionDetails,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControlLabel,
  Checkbox,
  TextField,
  Grid,
  Slider,
  Input,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

if (!localStorage.getItem("blooket-utility"))
  localStorage.setItem(
    "blooket-utility",
    JSON.stringify({ prefs: {}, injectables: [] })
  );
const handler = {
  get: (obj, prop) => {
    if (
      ["[object Object]", "[object Array]"].indexOf(
        Object.prototype.toString.call(obj[prop])
      ) > -1
    ) {
      return new Proxy(obj[prop], handler);
    }
    return obj[prop];
  },
  set: (obj, prop, value) => {
    obj[prop] = value;
    localStorage.setItem(
      "blooket-utility",
      JSON.stringify(window.blooketUtility)
    );
    return true;
  },
  deleteProperty: (obj, prop) => {
    const output = delete obj[prop];
    localStorage.setItem(
      "blooket-utility",
      JSON.stringify(window.blooketUtility)
    );
    return output;
  },
};
window.blooketUtility = new Proxy(
  JSON.parse(localStorage.getItem("blooket-utility")),
  handler
);
const blooketUtility = window.blooketUtility;

(async () => {
  for (const [i, injectable] of Object.entries(blooketUtility.injectables)) {
    const json = await (await fetch(injectable.url)).json();
    json.enabled = injectable.enabled;
    if (JSON.stringify(json) !== JSON.stringify(injectable))
      blooketUtility.injectables[i] = json;
  }
})();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeDialogOpen: false,
      injectableToRemove: {},
      addInjectableDialogOpen: false,
      injectableURL: "",
      addInjectableLoading: false,
      addInjectableError: "",
    };

    this.handleRemoveDialogClose = this.handleRemoveDialogClose.bind(this);
    this.confirmRemoveInjectable = this.confirmRemoveInjectable.bind(this);
    this.openRemoveDialog = this.openRemoveDialog.bind(this);
    this.toggleInjectable = this.toggleInjectable.bind(this);
    this.addInjectable = this.addInjectable.bind(this);
    this.handleAddInjectableDialogClose =
      this.handleAddInjectableDialogClose.bind(this);
    this.onInjectableURLChange = this.onInjectableURLChange.bind(this);
    this.onInjectableAddClicked = this.onInjectableAddClicked.bind(this);
  }

  handleRemoveDialogClose() {
    this.setState({ removeDialogOpen: false });
  }

  confirmRemoveInjectable() {
    this.setState({ removeDialogOpen: false });
    for (const [i, injectable] of Object.entries(blooketUtility.injectables)) {
      if (this.state.injectableToRemove.url === injectable.url) {
        blooketUtility.injectables.splice(i, 1);
      }
    }
    if (this.state.injectableToRemove.cleanupScript) {
      const scriptElement = document.createElement("script");
      scriptElement.src = this.state.injectableToRemove.cleanupScript;
      scriptElement.addEventListener("load", () => this.forceUpdate());
      document.body.appendChild(scriptElement);
    }
    this.forceUpdate();
  }

  openRemoveDialog(injectable) {
    this.setState({ removeDialogOpen: true, injectableToRemove: injectable });
  }

  toggleInjectable(injectable) {
    injectable.enabled = !injectable.enabled;
    this.forceUpdate();
  }

  addInjectable() {
    this.setState({ addInjectableDialogOpen: true });
  }

  async addInjectableFromURL(url) {
    let failed = false;
    const response = await fetch(url).catch(() => (failed = true));
    if (failed) return false;
    const injectable = await response.json().catch(() => (failed = true));
    if (failed) return false;
    if (
      typeof injectable.title === "string" &&
      typeof injectable.description === "string" &&
      typeof injectable.author === "string" &&
      typeof injectable.url === "string" &&
      injectable.scripts instanceof Array &&
      blooketUtility.injectables.filter((inj) => inj.url === injectable.url)
        .length === 0
    ) {
      injectable.enabled = true;
      blooketUtility.injectables.push(injectable);
      if (injectable.setupScript) {
        const scriptElement = document.createElement("script");
        scriptElement.src = injectable.setupScript;
        scriptElement.addEventListener("load", () => this.forceUpdate());
        document.body.appendChild(scriptElement);
      }
      return true;
    }
    return false;
  }

  handleAddInjectableDialogClose() {
    this.setState({
      addInjectableDialogOpen: false,
      addInjectableLoading: false,
      addInjectableError: "",
    });
  }

  onInjectableURLChange(e) {
    this.setState({ injectableURL: e.target.value });
  }

  async onInjectableAddClicked() {
    this.setState({ addInjectableLoading: true });
    if (await this.addInjectableFromURL(this.state.injectableURL))
      this.handleAddInjectableDialogClose();
    else
      this.setState({
        addInjectableError: "Invalid injectable",
        addInjectableLoading: false,
      });
  }

  render() {
    return (
      <Box
        height="100vh"
        width="100vw"
        position="fixed"
        top={0}
        left={0}
        overflow="auto"
      >
        <Box sx={{ m: 1 }}>
          <Typography variant="h5">
            <b>Blooket Utility Configurator</b>
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>Prefs</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Object.keys(blooketUtility.prefs).length ? (
                Object.values(blooketUtility.prefs).map((element) => {
                  const key = JSON.stringify(element);
                  if (
                    typeof element.value === "boolean" ||
                    element.value instanceof Boolean
                  ) {
                    return <BooleanPref elevated pref={element} key={key} />;
                  } else if (
                    typeof element.value === "number" ||
                    element.value instanceof Number
                  ) {
                    return (
                      <NumberPref
                        elevated={!this.props.elevated}
                        pref={element}
                        key={key}
                      />
                    );
                  } else if (element.value instanceof Object) {
                    return <ObjectPref elevated pref={element} key={key} />;
                  }
                  return null;
                })
              ) : (
                <Typography>No prefs</Typography>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Injectables
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {blooketUtility.injectables.length} injectable
                {blooketUtility.injectables.length === 1 ? "" : "s"} installed
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {blooketUtility.injectables.length ? (
                blooketUtility.injectables.map((injectable) => (
                  <Injectable
                    injectable={injectable}
                    openRemoveDialog={this.openRemoveDialog}
                    toggleInjectable={this.toggleInjectable}
                    key={injectable.url}
                  />
                ))
              ) : (
                <Typography>
                  No injectables are installed. Try clicking "Add Injectable"
                  below.
                </Typography>
              )}
              <Button
                variant="contained"
                sx={{ my: 1, mt: 2 }}
                onClick={this.addInjectable}
              >
                Add Injectable
              </Button>
            </AccordionDetails>
          </Accordion>
          <Dialog
            open={this.state.removeDialogOpen}
            onClose={this.handleRemoveDialogClose}
          >
            <DialogTitle>Remove injectable?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                The injectable "{this.state.injectableToRemove.title}" will be
                removed and its cleanup script will be executed (if it has one).
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRemoveDialogClose}>Cancel</Button>
              <Button onClick={this.confirmRemoveInjectable} color="error">
                Remove
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.addInjectableDialogOpen}
            onClose={this.handleAddInjectableDialogClose}
          >
            <DialogTitle>Add Injectable</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Add an injectable from a URL. The details of the injectable will
                be fetched and added to the Blooket Utility. You may need to run
                the injectable once to view its prefs.
              </DialogContentText>
              <TextField
                variant="filled"
                label="URL"
                sx={{ mt: 1, width: "100%" }}
                value={this.state.injectableURL}
                onChange={this.onInjectableURLChange}
                error={Boolean(this.state.addInjectableError)}
                helperText={this.state.addInjectableError}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleAddInjectableDialogClose}>
                Cancel
              </Button>
              <LoadingButton
                loading={this.state.addInjectableLoading}
                variant="contained"
                onClick={this.onInjectableAddClicked}
              >
                Add
              </LoadingButton>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    );
  }
}

class BooleanPref extends React.Component {
  constructor(props) {
    super(props);
    this.togglePref = this.togglePref.bind(this);
  }

  togglePref() {
    this.props.pref.value = !this.props.pref.value;
    this.forceUpdate();
  }

  render() {
    return (
      <Accordion elevation={this.props.elevated ? 3 : 1}>
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {this.props.pref.title}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {this.props.pref.value ? "En" : "Dis"}abled
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{this.props.pref.description}</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.pref.value}
                onClick={this.togglePref}
              />
            }
            label="Enabled"
          />
        </AccordionDetails>
      </Accordion>
    );
  }
}

class NumberPref extends React.Component {
  constructor(props) {
    super(props);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSliderChange(e, newValue) {
    this.props.pref.value = newValue;
    this.forceUpdate();
  }

  handleInputChange(e) {
    try {
      if (!isNaN(parseFloat(e.target.value))) {
        this.props.pref.value = parseFloat(e.target.value);
        this.forceUpdate();
      }
    } catch {}
  }

  render() {
    return (
      <Accordion elevation={this.props.elevated ? 3 : 1}>
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {this.props.pref.title}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Number: {this.props.pref.value}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ my: 1 }}>{this.props.pref.description}</Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Slider
                value={this.props.pref.value}
                onChange={this.handleSliderChange}
                min={this.props.pref.slider.min}
                max={this.props.pref.slider.max}
                step={this.props.pref.slider.step}
              />
            </Grid>
            <Grid item xs={1}>
              <Input
                value={this.props.pref.value}
                size="small"
                onChange={this.handleInputChange}
                inputProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    );
  }
}

class ObjectPref extends React.Component {
  render() {
    return (
      <Accordion elevation={this.props.elevated ? 3 : 1}>
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {this.props.pref.title}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Click to expand group
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ my: 1 }}>{this.props.pref.description}</Typography>
          {Object.values(this.props.pref.value).map((element) => {
            const key = JSON.stringify(element);
            if (
              typeof element.value === "boolean" ||
              element.value instanceof Boolean
            ) {
              return (
                <BooleanPref
                  elevated={!this.props.elevated}
                  pref={element}
                  key={key}
                />
              );
            } else if (
              typeof element.value === "number" ||
              element.value instanceof Number
            ) {
              return (
                <NumberPref
                  elevated={!this.props.elevated}
                  pref={element}
                  key={key}
                />
              );
            } else if (element.value instanceof Object) {
              return (
                <ObjectPref
                  elevated={!this.props.elevated}
                  pref={element}
                  key={key}
                />
              );
            }
            return null;
          })}
        </AccordionDetails>
      </Accordion>
    );
  }
}

class Injectable extends React.Component {
  constructor(props) {
    super(props);
    this.openRemoveDialog = this.openRemoveDialog.bind(this);
    this.toggleInjectable = this.toggleInjectable.bind(this);
  }

  openRemoveDialog() {
    this.props.openRemoveDialog(this.props.injectable);
  }

  toggleInjectable() {
    this.props.toggleInjectable(this.props.injectable);
  }

  render() {
    return (
      <Accordion elevation={3}>
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {this.props.injectable.title}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {this.props.injectable.enabled ? "En" : "Dis"}abled; by{" "}
            {this.props.injectable.author}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{this.props.injectable.description}</Typography>
          <Typography>
            <b>Author:</b> {this.props.injectable.author}
          </Typography>
          <Typography>
            <b>Scripts:</b> {this.props.injectable.scripts.length}
          </Typography>
          <Typography>
            <b>URL:</b> {this.props.injectable.url}
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.injectable.enabled}
                onClick={this.toggleInjectable}
              />
            }
            label="Enabled"
          />
          <Button
            onClick={this.openRemoveDialog}
            variant="contained"
            sx={{ my: 1 }}
            color="error"
          >
            Remove
          </Button>
        </AccordionDetails>
      </Accordion>
    );
  }
}

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
  },
});

class Themed extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Themed />, document.getElementById("root"));
