import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Popper,
  IconButton,
  Paper,
  ClickAwayListener,
  Snackbar
} from "@material-ui/core";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import { UpdateColors } from "../controller/noteController";
const colors = [
  { name: "violet", hexcode: "#E6E6FA" },
  { name: "orange", hexcode: "#F47E3F" },
  { name: "skyblue", hexcode: "#AFEEEE" },
  { name: "yellow", hexcode: "#F4D03F" },
  { name: "golden", hexcode: "#EEE8AA" },
  { name: "pink", hexcode: "#F43FD6" },
  { name: "white", hexcode: "#ffffff" },
  { name: "darkseagreen", hexcode: "#D2B48C" },
  { name: "steelblue", hexcode: "#B0E0E6" },
  { name: "gray", hexcode: "#34495E" },
  { name: "lightorange", hexcode: "#BC8F8F" },
  { name: "violet", hexcode: "#E6E6FA" },
  { name: "salmon", hexcode: "#FFC0CB" },
  { name: "darkgreen", hexcode: "#196F3D" },
  { name: "blue", hexcode: "#423FF4" },
];
export class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
      takeNote: "",
      checkBox: false,
      labelkey: "",
      label: "",
      color: "",
      openColorPallete: true,
      snackbarOpen: false,
      snackbarMsg: "",
    };
  }

  handlecolormenu = (event) => {
    this.setState({
      anchorEl: this.state.anchorEl ? null : event.currentTarget,
    });
  };
  handleClickAway = () => {
    this.setState({
      anchorEl: null,
    });
  };
  handleColor = (event) => {
    let noteColor = {
      key: this.props.noteId,
      color: event.target.value,
    };
    UpdateColors(noteColor)
      .then((res) => {
        this.setState({
          color: event.target.value,
          key: this.props.noteId,
        });
      })
      .catch((err) => {
        this.setState({
          snackbarOpen: true,
          SnackbarMsg: err,
        });
      });
  };
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const colorId = open ? "simple-popper" : undefined;
    let colorList = colors.map((key) => {
      return (
        <IconButton
          style={{ backgroundColor: key.hexcode }}
          value={key.name}
          onClick={this.handleColor}
        ></IconButton>
      );
    });
    return (
      <div className="colorcomponent-div">
        <div>
        <IconButton
          className="colorlense"
          aria-describedby={id}
          type="button"
          onClick={this.handlecolormenu}
        >
          <div className="ColorLensIcon" title="more">
            <ColorLensIcon />
          </div>
        </IconButton>
        </div>
        <Popper id={colorId} open={open} anchorEl={anchorEl}>
          <ClickAwayListener onClickAway={this.handleClickAway}>
            <Paper className="colorlense-paper">
              <div id="colorpaper">
                <div className="colorList">{colorList}</div>
              </div>
            </Paper>
          </ClickAwayListener>
        </Popper>
        <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                autoHideDuration={3000}
                open={this.state.snackbarOpen}
                message={<span id="message-id">{this.state.SnackbarMsg}</span>}
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="secondary"
                    onClick={this.handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                }
              />
      </div>
    );
  }
}

export default withRouter(ColorComponent);
