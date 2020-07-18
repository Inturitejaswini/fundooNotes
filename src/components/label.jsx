import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { InputBase, Button, IconButton, Card, Dialog } from "@material-ui/core";
import {
  getNotes,
  getLabelsCard,
  noteUpdate,
  archiveNotes,
  updatePin,
  updateUnPin,
  deleteNotes,
} from "../controller/noteController";
import image1 from "../assets/pushpin.jpeg";
import {
  CropOriginalIcon,
  PersonAddIcon,
  ColorLensIcon,
  ArchiveOutlinedIcon,
  RedoIcon,
  UndoIcon,
} from "@material-ui/icons";
import AppBarComponent from "../components/appBar";
import MoreComponent from "../components/moreComponent";
import Reminder from "../components/reminder";
import Color from "../components/color";
class LabelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteArray1: [],
      anchorEl: null,
      open: false,
      delete: false,
      key: "",
      keyItem: "",
      snackbarOpen: false,
      snackbarMsg: "",
    };
  }
  componentDidMount = () => {
    this.getAllNotes();
    this.getAllLables();
  };
  getAllNotes = () => {
    getNotes().then((res) => {
      this.setState({
        noteArray: res,
      });
    });
    this.setState({
      open: false,
    });
  };
  getAllLables = () => {
    getLabelsCard().then((res) => {
      this.setState({
        noteArray1: res,
      });
    });
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeTakeNote = (event) => {
    this.setState({ takeNote: event.target.value });
  };
  handleNote = (title, takeNote, key) => {
    this.setState({
      title: title,
      open: !this.state.open,
      takeNote: takeNote,
      key: key,
    });
  };
  handleDelete = () => {
    let deleteData = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      delete: this.state.delete,
    };
    deleteNotes(deleteData)
      .then((res) => {
        this.setState({
          open: false,
          delete: this.state.delete,
          title: this.state.title,
          takeNote: this.state.takeNote,
          key: this.state.key,
        });
      })
      .catch((err) => {
        this.setState({
          snackbarOpen: true,
          SnackbarMsg: err,
        });
      });
  };
  handlePin = () => {
    let pinData = {
      title: this.state.title,
      pin: this.state.pin,
      takeNote: this.state.takeNote,
      key: this.state.key,
    };
    updatePin(pinData)
      .then((res) => {
        this.setState({
          open: false,
          pin: this.state.pin,
          title: this.state.title,
          takeNote: this.state.takeNote,
          key: this.state.key,
        });
      })
      .catch((err) => {
        this.setState({
          snackbarOpen: true,
          SnackbarMsg: err,
        });
      });
  };
  changeHandleUnPin = (key, title, takeNote) => {
    let unPinData = {
      title: title,
      pin: !this.state.pin,
      takeNote: takeNote,
      key: key,
    };
    updateUnPin(unPinData)
      .then((res) => {
        this.setState({
          open: false,
          pin: this.state.pin,
          title: title,
          takeNote: takeNote,
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
  handleArchive = (title, takeNote, key) => {
    let archiveData = {
      title: title,
      takeNote: takeNote,
      key: key,
      delete: this.state.delete,
      archive: this.state.archive,
    };
    archiveNotes(archiveData)
      .then((res) => {
        this.setState({
          open: false,
          delete: this.state.delete,
          title: title,
          takeNote: takeNote,
          key: key,
          archive: this.state.archive,
        });
      })
      .catch((err) => {
        this.setState({
          snackbarOpen: true,
          SnackbarMsg: err,
        });
      });
  };
  handleUpdate = () => {
    let update = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
    };
    noteUpdate(update)
      .then((res) => {
        this.setState({
          open: false,
          title: this.state.title,
          takeNote: this.state.takeNote,
          key: this.state.key,
        });
      })
      .catch((err) => {
        this.setState({
          snackbarOpen: true,
          SnackbarMsg: err,
        });
      });
  };

  handleMoreMenu = (event) => {
    this.setState({
      anchorEl: this.state.anchorEl ? null : event.currentTarget,
    });
  };
  handleAddLabelClick = () => {
    this.setState({
      addLabel: true,
    });
  };
  render() {
    let pinData = this.state.noteArray1.map((keyItem) => {
      if (this.props.location.state == keyItem.data().label) {
        return (
          <div className="labelComponent">
            {this.state.noteArray.map((key) => {
              if (key.id == keyItem.data().key) {
                return (
                  <div className="noteContainer_labelcomponent">
                    <div
                      className="getnotecomponetnotecard_labelcomponnet"
                      style={{ background: key.data().color }}
                    >
                      <Card id="labelComponent-card">
                        <div
                          id="take_note_labelcompnent"
                          onClick={() =>
                            this.handleNote(
                              key.data().title,
                              key.data().takeNote,
                              key.id
                            )
                          }
                        >
                          <div id="inner_take_note_labelcomponent">
                            <div className="gettnote_img_label">
                              <InputBase
                                placeholder="title"
                                value={key.data().title}
                              />
                            </div>
                            <div>
                              <InputBase
                                placeholder="take a note....."
                                value={key.data().takeNote}
                              ></InputBase>
                            </div>
                          </div>
                          {key.data().remainder != null ? (
                            <div className="date_and_time">
                              <InputBase
                                id="inner_date_and_time"
                                value={key.data().remainder}
                              ></InputBase>
                            </div>
                          ) : (
                            <div></div>
                          )}
                          <div id="inner_map_function">
                            {this.state.noteArray1.map((keyItem) => {
                              if (
                                keyItem.data().checkBox == true &&
                                keyItem.data().key == key.id
                              ) {
                                return (
                                  <div className="chip-div">
                                    <InputBase
                                      id="labelssize"
                                      value={keyItem.data().label}
                                    />
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>
                        <div className="note-card-div-label">
                          <Reminder noteId={key.id}></Reminder>
                          <IconButton>
                            <div className="personAdd">
                              <PersonAddIcon />
                            </div>
                          </IconButton>
                          <Color noteId={key.id}></Color>

                          <IconButton>
                            <div id="originalIcon">
                              <CropOriginalIcon />
                            </div>
                          </IconButton>
                          <IconButton
                            onClick={() =>
                              this.handleArchive(
                                key.data().title,
                                key.data().takeNote,
                                key.id
                              )
                            }
                          >
                            <div id="Archeive">
                              <ArchiveOutlinedIcon />
                            </div>
                          </IconButton>
                          <MoreComponent noteId={key.id}></MoreComponent>
                          <IconButton className="gettnote_img_img">
                            <img
                              className="pindrop-img"
                              src={image1}
                              onClick={this.handlePin}
                            />
                          </IconButton>
                        </div>
                      </Card>
                    </div>
                    <Dialog
                      aria-labelledby="simple-dialog-title"
                      open={this.state.open}
                    >
                      <div className="card_getNote">
                        <div id="getNotes-align">
                          <InputBase
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.handleChangeTitle}
                          ></InputBase>{" "}
                          <IconButton className="gettnote_img_img">
                            <img
                              className="pindrop-img"
                              src={image1}
                              onClick={this.handlePin}
                            />
                          </IconButton>
                        </div>
                        <div className="takeNoteCard">
                          <InputBase
                            placeholder="take a note"
                            value={this.state.takeNote}
                            onChange={this.handleChangeTakeNote}
                          ></InputBase>
                        </div>
                        <div className="getnoteicons">
                          <Reminder noteId={key.id}></Reminder>
                          <IconButton className="personadd-btn">
                            <div className="personAdd">
                              <PersonAddIcon />
                            </div>
                          </IconButton>
                          <IconButton className="Colorlens-btn">
                            <div className="ColorLens">
                              <ColorLensIcon />
                            </div>
                          </IconButton>
                          <IconButton className="originalicon-btn">
                            <div className="originalIcon">
                              <CropOriginalIcon />
                            </div>
                          </IconButton>
                          <IconButton
                            className="archeive-btn"
                            onClick={() =>
                              this.handleArchive(
                                key.data().title,
                                key.data().takeNote,
                                this.state.key
                              )
                            }
                          >
                            <div className="Archeive">
                              <ArchiveOutlinedIcon />
                            </div>
                          </IconButton>
                          <MoreComponent noteId={key.id}></MoreComponent>
                          <IconButton className="undo-btn">
                            <div className="undo">
                              <UndoIcon />
                            </div>
                          </IconButton>
                          <IconButton className="redo-btn">
                            <div className="redo">
                              <RedoIcon />
                            </div>
                          </IconButton>
                          <IconButton
                            className="close-btn"
                            onClick={this.handleUpdate}
                          >
                            close
                          </IconButton>
                        </div>
                      </div>
                    </Dialog>
                  </div>
                );
              }
            })}
          </div>
        );
      }
    });
    return (
      <div>
        <AppBarComponent />
        {pinData}
      </div>
    );
  }
}
export default withRouter(LabelComponent);
