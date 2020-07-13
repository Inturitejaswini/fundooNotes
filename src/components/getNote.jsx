import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  getNotes,
  ArchiveNotes,
  updatePin,
  updateUnPin,
  noteUpdate,
  deleteNotes,
  getLabelsCard,
} from "../controller/noteController";
import MoreComponent from "../components/moreComponent";
import {
  CropOriginalIcon,
  UndoIcon,
  ArchiveOutlinedIcon,
  RedoIcon,
  PersonAddIcon,
} from "@material-ui/icons";
import {
  IconButton,
  Dialog,
  InputBase,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { Reminder } from "./reminder";
import ColorComponent from "./color";
import image1 from "../assets/pushpin.jpeg";
const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        padding: "4px",
        fontsize: "0.5rem",
      },
    },
    MuiDialog: {
      container: {
        background: "whitesmoke",
      },
    },
  },
});
class GetNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteArray1: [],
      anchorEl: null,
      open: false,
      alertOpen: false,
      title: "",
      key: "",
      takeNote: "",
      id: "",
      pin: false,
      archive: false,
      delete: false,
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
      this.state.noteArray.map((key) => {});
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
  handleNote = (title, takeNote, id) => {
    this.setState({
      title: title,
      open: true,
      takeNote: takeNote,
      key: id,
    });
  };
  handleClose = (value) => {
    this.setState({
      open: false,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
    });
    let update = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
    };
    noteUpdate(update);
  };
  handleMoreMenu = (event) => {
    this.setState({
      anchorEl: this.state.anchorEl ? null : event.currentTarget,
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
  handleDelete = () => {
    this.setState({
      open: false,
      delete: this.state.delete,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
    });
    let deleteData = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      delete: this.state.delete,
    };
    deleteNotes(deleteData);
  };
  handlePin = (title, takeNote, key) => {
    this.setState({
      open: false,
      pin: this.state.pin,
      title: title,
      takeNote: takeNote,
      key: key,
    });
    let pin = {
      pin: this.state.pin,
      title: title,
      takeNote: takeNote,
      key: key,
    };
    updatePin(pin);
  };
  handleArchive = () => {
    this.setState({
      open: false,
      delete: this.state.delete,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      archive: this.state.archive,
    });
    let archive = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      delete: this.state.delete,
      archive: this.state.archive,
    };
    ArchiveNotes(archive);
  };
  changeHandleUnPin = (key, title, takeNote) => {
    this.setState({
      open: false,
      pin: this.state.pin,
      title: title,
      takeNote: takeNote,
      key: key,
    });
    let pin = {
      title: title,
      pin: !this.state.pin,
      takeNote: takeNote,
      key: key,
    };
    updateUnPin(pin);
  };

  render() {
    let List = this.props.listId ? "listviewGrid" : null;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;
    let pinData = this.state.noteArray.map((key) => {
      if (
        key.data().delete == false &&
        key.data().archive == false &&
        key.data().pin == true
      ) {
        return (
          <div className="getcard-div">
            <div
              className="note-card-div"
              style={{ background: key.data().color }}
            >
              <card>
                <div className="take_note">
                  <div>
                    <InputBase
                      placeholder="Title"
                      value={key.data().title}
                      onClick={() =>
                        this.handleNote(
                          key.data().title,
                          key.data().takeNote,
                          key.id
                        )
                      }
                    />
                  </div>
                  <div>
                    <InputBase
                      placeholder="take a note....."
                      value={key.data().takeNote}
                      onClick={() =>
                        this.handleNote(
                          key.data().title,
                          key.data().takeNote,
                          key.id
                        )
                      }
                    ></InputBase>
                    {key.data().remainder != null ? (
                      <div className="date_and_time">
                        <InputBase
                          id="inner_date_and_time"
                          value={key.data().remainder}
                        ></InputBase>
                      </div>
                    ) : (
                      <div>hai</div>
                    )}
                    <div className="date_and_time">
                      <InputBase
                        id="inner_date_and_time"
                        value={key.data().remainder}
                      ></InputBase>
                    </div>
                  </div>
                  <div className="dailogue-icons-div">
                    <Reminder noteId={key.id}></Reminder>
                    <IconButton>
                      <div className="personAdd-div" title="collabarator">
                        <PersonAddIcon />
                      </div>
                    </IconButton>
                    <ColorComponent noteId={key.id}></ColorComponent>
                    <IconButton>
                      <div className="originalIcon-div" title="add image">
                        <CropOriginalIcon />
                      </div>
                    </IconButton>
                    <IconButton onClick={this.handleArchive}>
                      <div className="Archeive-div" title="Archive">
                        <ArchiveOutlinedIcon />
                      </div>
                    </IconButton>
                    <MoreComponent noteId={key.id}></MoreComponent>
                    <IconButton>
                      <img
                        className="pushpin"
                        src={image1}
                        onClick={() =>
                          this.changeHandleUnPin(
                            key.id,
                            key.data().title,
                            key.data().takeNote
                          )
                        }
                      />
                    </IconButton>
                  </div>
                </div>
              </card>
            </div>
            <MuiThemeProvider theme={theme}>
              <Dialog
                aria-labelledby="simple-dialog-title"
                open={this.state.open}
                style={{ background: "whitesmoke" }}
              >
                <div className="card_getNote">
                  <div id="getNotes-align">
                    <InputBase
                      placeholder="title"
                      value={this.state.title}
                      onChange={this.handleChangeTitle}
                    ></InputBase>
                    <IconButton>
                      <img
                        className="pindrop-img"
                        src={image1}
                        onClick={() =>
                          this.changeHandleUnPin(
                            this.state.title,
                            this.state.takeNote,
                            this.state.key
                          )
                        }
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
                  <div className="dailogue-icons">
                    <Reminder noteId={key.id}></Reminder>
                    <IconButton className="personadd-btn">
                      <div className="personAdd" title="collabarator">
                        <PersonAddIcon />
                      </div>
                    </IconButton>
                    <ColorComponent noteId={key.id}></ColorComponent>
                    <IconButton className="originalicon-btn">
                      <div className="originalIcon" title="add image">
                        <CropOriginalIcon />
                      </div>
                    </IconButton>
                    <IconButton
                      className="archeive-btn"
                      onClick={this.handleArchive}
                    >
                      <div className="Archeive" title="Archive">
                        <ArchiveOutlinedIcon />
                      </div>
                    </IconButton>
                    <MoreComponent noteId={key.id}></MoreComponent>
                    <IconButton className="undo-btn">
                      <div className="undo" title="redo">
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
                      onClick={this.handleClose}
                    >
                      close
                    </IconButton>
                  </div>
                </div>
              </Dialog>
            </MuiThemeProvider>
          </div>
        );
      }
    });
    let noteData = this.state.noteArray.map((key) => {
      console.log("dataaaaa--is generating key", key.id);
      if (
        key.data().archive == false &&
        key.data().delete == false &&
        key.data().pin == false
      ) {
        return (
          <div className="getcard-div">
            <div
              className="note-card-div"
              id={List}
              style={{ background: key.data().color }}
            >
              <card>
                <div className="take_note">
                  <div>
                    <InputBase
                      style={{ color: "black" }}
                      placeholder="Title"
                      value={key.data().title}
                      onClick={() =>
                        this.handleNote(
                          key.data().title,
                          key.data().takeNote,
                          key.id
                        )
                      }
                    />
                  </div>
                  <div>
                    <InputBase
                      placeholder="take a note....."
                      value={key.data().takeNote}
                      onClick={() =>
                        this.handleNote(
                          key.data().title,
                          key.data().takeNote,
                          key.id
                        )
                      }
                    ></InputBase>
                    <div className="date_and_time">
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
                        {this.state.noteArray1.map((key1) => {
                          if (
                            key1.data().checkBox == true &&
                            key1.data().key == key.id
                          ) {
                            return (
                              <div className="chip-div">
                                <InputBase
                                  id="labelssize"
                                  value={key1.data().label}
                                />
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="dailogue-icons-div">
                    <Reminder noteId={key.id}></Reminder>
                    <IconButton className="personadd-btn">
                      <div className="personAdd-div" title="collabarator">
                        <PersonAddIcon />
                      </div>
                    </IconButton>
                    <ColorComponent noteId={key.id}></ColorComponent>
                    <IconButton className="originalicon-btn">
                      <div className="originalIcon-div" title="add image">
                        <CropOriginalIcon />
                      </div>
                    </IconButton>
                    <IconButton
                      className="archeive-btn"
                      onClick={this.handleArchive}
                    >
                      <div className="Archeive" title="Archive">
                        <ArchiveOutlinedIcon />
                      </div>
                    </IconButton>
                    <MoreComponent noteId={key.id}></MoreComponent>
                    <IconButton id="pin-btn">
                      <img
                        className="pindrop-img"
                        src={image1}
                        onClick={() =>
                          this.handlePin(
                            key.data().title,
                            key.data().takeNote,
                            key.id
                          )
                        }
                      />
                    </IconButton>
                  </div>
                </div>
              </card>
            </div>
            <MuiThemeProvider theme={theme}>
              <Dialog
                aria-labelledby="simple-dialog-title"
                open={this.state.open}
                style={{ background: "white" }}
              >
                <div className="card_getNote">
                  <div id="getNotes-align">
                    <InputBase
                      placeholder="title"
                      value={this.state.title}
                      onChange={this.handleChangeTitle}
                    ></InputBase>
                    <IconButton>
                      <img
                        className="pindrop-img"
                        src={image1}
                        onClick={() =>
                          this.handlePin(
                            this.state.title,
                            this.state.takeNote,
                            this.state.key
                          )
                        }
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
                  <div className="dailogue-icons">
                    <Reminder noteId={this.state.key}></Reminder>
                    <IconButton className="personadd-btn">
                      <div className="personAdd" title="collabarator">
                        <PersonAddIcon />
                      </div>
                    </IconButton>
                    <ColorComponent noteId={key.id}></ColorComponent>
                    <IconButton className="originalicon-btn">
                      <div className="originalIcon" title="add image">
                        <CropOriginalIcon />
                      </div>
                    </IconButton>
                    <IconButton
                      className="archeive-btn"
                      onClick={this.handleArchive}
                    >
                      <div className="Archeive" title="Archive">
                        <ArchiveOutlinedIcon />
                      </div>
                    </IconButton>
                    <MoreComponent noteId={this.state.key}></MoreComponent>
                    <IconButton className="undo-btn">
                      <div className="undo" title="redo">
                        <UndoIcon />
                      </div>
                    </IconButton>

                    <IconButton className="redo-btn">
                      <div className="redo">
                        <RedoIcon />
                      </div>
                    </IconButton>
                    <IconButton className="close" onClick={this.handleClose}>
                      close
                    </IconButton>
                  </div>
                </div>
              </Dialog>
            </MuiThemeProvider>
          </div>
        );
      }
    });
    return (
      <div id="allNotes">
        {pinData}
        {noteData}
      </div>
    );
  }
}
export default withRouter(GetNotes);
