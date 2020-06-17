/******************************************************************************
* Execution : 1. default node cmd> node gettingRemainder.jsx 
* 2. if nodemon installed cmd> nodemodule gettingRemainder.jsx
* 
* Purpose : create gettingRemainder page.
* @description 
* 
* @file :gettingRemainder.jsx
* @overview :gettingRemainder form problem.
* @module :gettingRemainder - This is optional if expeclictly its an npm or local package
* @author :sravanthi<sravanthiakula15@gmail.com>
* @version :1.0
* @since :-20-01-2020
******************************************************************************/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getnotes } from '../controller/noteController'
import { CropOriginalIcon, AddAlertIcon, PersonAddIcon, OpenInBrowserIcon, RedoIcon, ArchiveOutlinedIcon, UndoIcon } from '@material-ui/icons';
import image1 from '../assets/pushpin.jpeg'
import { InputBase, IconButton, Dialog } from '@material-ui/core';
import { updatePin, updateUnPin, deleteNotes, noteUpdate, unArchiveNotes, ArchiveNotes, getLabelsCard } from '../controller/noteController'
import AppBar1 from './appBar'
import Reminder from './reminder'
import MoreComponent from './moreComponent';
import Notes from './notes'
import ColorComponent from './color'
class RemainderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      noteArray: [],
      open: false,
      title: "",
      takeNote: "",
      archive: true,
      key: "",
      pin: false,
      archive: false,
      delete: false
    }
  }
  handleDelete = () => {
    this.setState({
      open: false,
      delete: this.state.delete,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key
    });
    let delete1 = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      delete: this.state.delete
    }
    deleteNotes(delete1).then((res) => {
    })
  }
  handlePin = (title, takeNote, key) => {
    this.setState({
      open: false,
      pin: this.state.pin,
      title: title,
      takeNote: takeNote,
      key: key
    });
    let pin = {
      pin: this.state.pin,
      title: title,
      takeNote: takeNote,
      key: key
    }
    updatePin(pin).then((res) => {
    })
  }
  handleArchive = () => {
    this.setState({
      open: false,
      delete: this.state.delete,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      archive: this.state.archive
    });
    let archive1 = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      delete: this.state.delete,
      archive: this.state.archive
    }
    ArchiveNotes(archive1).then((res) => {
    })
  }
  changeHandleUnPin = (key, title, takeNote) => {
    this.setState({
      open: false,
      pin: this.state.pin,
      title: title,
      takeNote: takeNote,
      key: key
    });

    let pin = {
      title: title,
      pin: !this.state.pin,
      takeNote: takeNote,
      key: key
    }
    updateUnPin(pin).then((res) => {
    })
  }
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }
  handleChangeTakeNote = (event) => {
    this.setState({ takeNote: event.target.value });
  }
  handleNote = (title, takeNote, key) => {
    this.setState({
      title: title,
      open: !this.state.open,
      takeNote: takeNote,
      key: key
    })
  }
  handleUnArchive = () => {
    this.setState({
      open: false,
      archive: this.state.archive,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key
    });
    let archive1 = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      archive: this.state.archive,
      key: this.state.key,
    }
    unArchiveNotes(archive1).then((res) => {
    })
  }
  handleUpdate = () => {
    this.setState({
      open: false,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key
    });
    let update = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key
    }
    noteUpdate(update).then((res) => {
    })
  };
  componentDidMount = () => {
    this.getAllNotes();
    this.getAllLables();
  }
  getAllNotes = () => {
    getNotes()
      .then(res => {
        this.setState({
          noteArray: res
        })
        this.state.noteArray.map((key) => {
        })
      })
    this.setState({
      open: false
    })
  }
  getAllLables = () => {
    getLabelsCard()
      .then(res => {
        this.setState({
          noteArray1: res
        })
      })

  }
  handlemoremenu = (event) => {
    this.setState({
      anchorEl: (this.state.anchorEl ? null : event.currentTarget)
    })
  }
  handleArchive = () => {
    this.setState({
      open: false,
      delete: this.state.delete,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      archive: this.state.archive
    });
    let archive1 = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      delete: this.state.delete,
      archive: this.state.archive
    }
    ArchiveNotes(archive1).then((res) => {
    })
  }
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    var noteData = this.state.noteArray.map(key => {
      if (key.data().remainder !== "") {
        return (
          <div>
            <div className="getnotecomponetnotecardremainder">
              <card >
                <div id="take_note3" onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)}>
                  <div>
                    <InputBase
                      placeholder="title" value={key.data().title} />
                  </div>
                  <div>
                    <InputBase placeholder="take a note....." value={key.data().takeNote}></InputBase>
                  </div>
                  <div className="date_and_time">
                    <InputBase id="inner_date_and_time" value={key.data().remainder}></InputBase></div>
                </div>
                <div className="remainder_note-card-div">

                  <Reminder
                    noteId={key.id}></Reminder>
                  <IconButton className="personadd">
                    <div className="personAdd"><PersonAddIcon />
                    </div>
                  </IconButton>
                  <ColorComponent noteId={key.id}></ColorComponent>
                  <IconButton className="originalicon">
                    <div id="originalIcon"><CropOriginalIcon />
                    </div>
                  </IconButton>
                  <IconButton className="archeive" onClick={this.handleArchive} >
                    <div id="Archeive"><ArchiveOutlinedIcon />
                    </div>
                  </IconButton>
                  <MoreComponent
                    noteId={key.id}></MoreComponent>
                  <IconButton  >
                    <img className="pushpin" src={image1} onClick={this.handlePin} />
                  </IconButton>
                </div>
              </card>
            </div>
            <Dialog aria-labelledby="simple-dialog-title" open={this.state.open}>
              <div className="card_getNote">

                <div id="getNotes-align">
                  <InputBase placeholder="title" value={this.state.title} onChange={this.handleChangeTitle}>
                  </InputBase>
                  <IconButton  >
                    <img className="pindrop2" src={image1} onClick={this.handlePin} />
                  </IconButton>
                </div>
                <div className="takeNoteCard">
                  <InputBase placeholder="take a note" value={this.state.takeNote} onChange={this.handleChangeTakeNote}>
                  </InputBase>
                </div>
                <div className="getnoteicons">
                  <IconButton className="alert1" >
                    <div className="alert1" ><AddAlertIcon />
                    </div>
                  </IconButton>
                  <IconButton className="personadd1" >
                    <div className="personAdd1"><PersonAddIcon />
                    </div>
                  </IconButton>
                  <ColorComponent noteId={key.id}></ColorComponent>
                  <IconButton className="originalicon1" >
                    <div className="originalIcon1" ><CropOriginalIcon />
                    </div>
                  </IconButton>
                  <IconButton className="unarcheive1" title="unArchive" onClick={this.handleUnArchive}>
                    <div className="unArcheive1" ><OpenInBrowserIcon />
                    </div>
                  </IconButton>
                  <div>
                    <MoreComponent
                      noteId={this.state.key}></MoreComponent>
                  </div>
                  <IconButton className="undo1">
                    <div className="undo1" ><UndoIcon />
                    </div>
                  </IconButton>
                  <IconButton className="redo1" >
                    <div className="redo1" ><RedoIcon />
                    </div>
                  </IconButton>
                  <IconButton className="close1" onClick={this.handleUpdate}>
                    close
                  </IconButton>
                </div>
              </div>
            </Dialog>
          </div>
        )
      }
    })
    return (
      <div >
        <AppBar1 />
        <Notes />
        {noteData}
      </div>
    )
  }
}
export default withRouter(RemainderComponent)