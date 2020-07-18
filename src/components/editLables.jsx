import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {InputBase,TextField,IconButton,Button,Dialog,Snackbar} from "@material-ui/core";
import {LabelIcon,ClearIcon,DoneIcon,CreateIcon,EditOutlinedIcon} from "@material-ui/icons";
import { updateLabel, getLabelsCard } from "../controller/noteController";
class EditLabels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      open: false,
      key: "",
      label: "",
      snackbarOpen: false,
      snackbarMsg: "",
    };
  }
  componentDidMount = () => {
    this.getAllLables();
  };
  handleNote = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  getAllLables = () => {
    getLabelsCard().then((res) => {
      this.setState({
        noteArray: res,
      });
    });
  };
  handleClear = () => {
    this.setState({
      title: "",
    });
  };
  handleLabel = (event) => {
    this.setState({ label: event.target.value });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handleUpdate = (key) => {
    let userData = {
      label: this.state.label,
      key: key,
    };
    updateLabel(userData)
      .then((res) => {
        this.setState({
          open: false,
          label: this.state.label,
          key: key,
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
    return (
      <div>
        <Button id="editlabelicon-btn" type="button" onClick={this.handleNote}>
          <div id="edit-lables" title="edit labels">
            <div id="editlabelicon">
              <EditOutlinedIcon />
            </div>
            <div className="editlabel2">Edit Lables</div>
          </div>
        </Button>
        <Dialog
          className="Dialog"
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <div className="edit-label-div">
            <h3>Edit labels</h3>
            <div>
              <IconButton title="cancel">
                <ClearIcon onClick={this.handleClear}></ClearIcon>
              </IconButton>
              <TextField placeholder="create new label"></TextField>
              <IconButton>
                <DoneIcon title="create label"></DoneIcon>
              </IconButton>
            </div>
            <div className="filled_label">
              {this.state.noteArray.map((key) => {
                return (
                  <div className="filled_label_icon">
                    <div>
                      <IconButton>
                        <LabelIcon />
                      </IconButton>
                      <InputBase
                        className="filled_label_icon-btn"
                        defaultValue={key.data().label}
                        onChange={this.handleLabel}
                      ></InputBase>
                    </div>
                    <div>
                      <IconButton onClick={() => this.handleUpdate(key.id)}>
                        <CreateIcon />
                      </IconButton>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button>
              {" "}
              <div onClick={this.handleClose}>Close</div>{" "}
            </Button>
          </div>
        </Dialog>
      </div>
    );
  }
}
export default withRouter(EditLabels);
