import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  getnotes,
  restoreNotes,
  deleteNotesPermenently,
} from "../controller/noteController";
import { Card, InputBase, IconButton, Dialog } from "@material-ui/core";
import { DeleteForeverIcon, RestoreFromTrashIcon } from "@material-ui/icons";
import AppBarComponent from "../components/appBar";
class Trash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      noteArray: [],
      open: false,
      title: "",
      takeNote: "",
      delete: false,
      key: "",
      archive: false,
      anchorEl: null,
      snackbarOpen: false,
      snackbarMsg: "",
    };
  }
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
  handlePermenentDelete = (key) => {
    let permanentDeleteData = {
      key: key,
    };
    deleteNotesPermenently(permanentDeleteData)
      .then((res) => {
        this.setState({
          open: false,
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

  handleDelete = (key) => {
    let deleteData = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: key,
      delete: this.state.delete,
    };
    restoreNotes(deleteData)
      .then((res) => {
        this.setState({
          open: false,
          delete: !this.state.delete,
          title: this.state.title,
          takeNote: this.state.takeNote,
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
  componentDidMount = () => {
    getnotes().then((res) => {
      this.setState({
        noteArray: res,
      });
    });
    this.setState({
      open: false,
    });
  };
  render() {
    let noteData = this.state.noteArray.map((key) => {
      if (key.data().delete == true && key.data().archive == false) {
        return (
          <div className="delete-notecard-div">
            <Card className="delete-card-div">
              <div id="take_note">
                <div>
                  <InputBase
                    placeholder="title"
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
                </div>
                <div className="deleteicons">
                  <IconButton className="DeleteForever-Btn">
                    <div
                      className="DeleteForeverIcon-div"
                      title="deleteforever"
                      onClick={() => this.handlePermenentDelete(key.id)}
                    >
                      <DeleteForeverIcon />
                    </div>
                  </IconButton>
                  <IconButton>
                    <div
                      title="restore"
                      onClick={() => this.handleDelete(key.id)}
                    >
                      <RestoreFromTrashIcon />
                    </div>
                  </IconButton>
                </div>
              </div>
            </Card>
            <Dialog open={this.state.open} onClick={this.handleUpdate}>
              <div className="card_getNote">
                <div>
                  <InputBase
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleChangeTitle}
                  ></InputBase>
                </div>
                <div>
                  <InputBase
                    placeholder="take a note"
                    value={this.state.takeNote}
                    onChange={this.handleChangeTakeNote}
                  ></InputBase>
                </div>
                <div className="getnoteicons">
                  <IconButton
                    className="DeleteForever"
                    onClick={() => this.handlePermenentDelete(key.id)}
                  >
                    <div className="DeleteForeverIcon" title="deleteforever">
                      <DeleteForeverIcon />
                    </div>
                  </IconButton>
                  <IconButton className="RestoreFromTrash">
                    <div
                      className="RestoreFromTrashIcon"
                      title="restore"
                      onClick={() => this.handleDelete(this.state.key)}
                    >
                      <RestoreFromTrashIcon />
                    </div>
                  </IconButton>
                </div>
              </div>
            </Dialog>
          </div>
        );
      }
    });
    return (
      <div>
        <AppBarComponent />
        {noteData}
      </div>
    );
  }
}
export default withRouter(Trash);
