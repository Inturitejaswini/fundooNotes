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
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import RedoIcon from '@material-ui/icons/Redo';
import Popper from '@material-ui/core/Popper'
import image1 from '../assets/pushpin.jpeg'
import { Paper } from '@material-ui/core';
import { Button, InputBase, IconButton } from '@material-ui/core';
import UndoIcon from '@material-ui/icons/Undo'
import { updatePin } from '../controller/noteController'
import { updateunPin } from '../controller/noteController'
import { deleteNotes } from '../controller/noteController';
import { noteUpdate } from '../controller/noteController'
import { unArchiveNotes } from '../controller/noteController'
import { ArchiveNotes } from '../controller/noteController'
import AppBar1 from '../component/appBar'
import Dialog from '@material-ui/core/Dialog';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { getlabelscard } from '../controller/noteController'
import Reminder from '../component/reminder'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreComponent from '../component/moreComponent';
import Notes from '../component/notes'
import ColorComponent from './colorComponent'
class remainderComponent extends Component {
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
    console.log("data come to delete function");
    this.setState({
      open: false,
      delete: this.state.delete,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key
    });
    console.log("response is coming to handle delete", this.state.key, this.state.delete)
    let delete1 = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      delete: this.state.delete
    }
    console.log("response is coming to handle delete", delete1)
    deleteNotes(delete1).then((res) => {
      console.log("data is deleted came to in get note component", res)
    })
  }
  handlePin = (title, takeNote, key) => {
    console.log("gggggg--->");
    this.setState({
      // selectedValue: value, 
      open: false,
      pin: this.state.pin,
      title: title,
      takeNote: takeNote,
      key: key
    });
    console.log("response is coming to handle pin", this.state.pin)
    let pin = {
      pin: this.state.pin,
      title: title,
      takeNote: takeNote,
      key: key
    }
    //console.log("response is coming to handle pin", pin.pin)
    updatePin(pin).then((res) => {
      console.log("data is updated came to in get note component", res)
    })
  }
  handleArchive = () => {
    console.log("data come to delete function");
    this.setState({
      open: false,
      delete: this.state.delete,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      archive: this.state.archive
    });
    console.log("response is coming to handle delete", this.state.key, this.state.delete)
    let archive1 = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      delete: this.state.delete,
      archive: this.state.archive
    }
    console.log("response is coming to handle delete")
    ArchiveNotes(archive1).then((res) => {
      console.log("data is archived came to in get note component", res)
    })
  }
  changehandleunPin = (key, title, takeNote) => {
    console.log("gggggg--->changing");
    this.setState({
      // selectedValue: value, 
      open: false,
      pin: this.state.pin,
      title: title,
      takeNote: takeNote,
      key: key
    });
    console.log("response is coming to handle pin", this.state.pin, title, takeNote, key)

    let pin = {
      title: title,
      pin: !this.state.pin,
      takeNote: takeNote,
      key: key
    }
    console.log("response is coming to handle pin", pin.pin, pin.title, pin.takeNote)
    updateunPin(pin).then((res) => {
      console.log("data is updated came to in get note component", res)
    })
  }
  handlechangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
    // console.log("taking title", this.state.title);
  }
  handlechangetakeNote = (event) => {
    this.setState({ takeNote: event.target.value });
    // console.log("taking notes",this.state.takeNote);
  }
  handleNote = async (title, takeNote, key) => {
    //console.log("id in get",key);
    await this.setState({
      title: title,
      open: !this.state.open,
      takeNote: takeNote,
      key: key
    })
    // console.log("taking title", this.state.title,this.state.takeNote,this.state.key);
  }
  handleunArchive = () => {
    console.log("data come to delete function");
    this.setState({
      open: false,
      archive: this.state.archive,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key
    });
    //console.log("response is coming to handle delete",this.state.key,this.state.delete)
    let archive1 = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      archive: this.state.archive,
      key: this.state.key,
    }
    console.log("response is coming to handle unarchive", archive1.archive)
    unArchiveNotes(archive1).then((res) => {
      console.log("data is unarchived came to in get note component", res)
    })
  }
  handleUpdate = () => {
    // console.log("gggggg--->",value);
    this.setState({
      // selectedValue: value, 
      open: false,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key
    });
    // console.log("response is coming to handle upade",this.state.key)
    let update = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key
    }
    //console.log("response is coming to handle upade", update)
    noteUpdate(update).then((res) => {
      // console.log("data is updated came to in get note component", res)
    })
  };
  componentDidMount = () => {
    this.getAllNotes();
    this.getAllLables();
  }
  getAllNotes = () => {
    getnotes()
      .then(res => {
        this.setState({
          noteArray: res
        })
        console.log("noteData", this.state.noteArray)
        this.state.noteArray.map((key) => {
        })
      })
    this.setState({
      open: false
    })
  }
  getAllLables = () => {
    getlabelscard()
      .then(res => {
        console.log("dataaaaaaa for labels", res);
        this.setState({
          noteArray1: res
        })
        console.log("noteData", this.state.noteArray1)
      })

  }
  handlemoremenu = (event) => {
    this.setState({
      anchorEl: (this.state.anchorEl ? null : event.currentTarget)
    })
  }
  handleArchive = () => {
    console.log("data come to delete function");
    this.setState({
      open: false,
      delete: this.state.delete,
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      archive: this.state.archive
    });
    console.log("response is coming to handle delete", this.state.key, this.state.delete)
    let archive1 = {
      title: this.state.title,
      takeNote: this.state.takeNote,
      key: this.state.key,
      delete: this.state.delete,
      archive: this.state.archive
    }
    console.log("response is coming to handle delete")
    ArchiveNotes(archive1).then((res) => {
      console.log("data is archived came to in get note component", res)
    })
  }
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    var noteData = this.state.noteArray.map(key => {
      console.log("dataaaaa-in key----->", key.id, key.data().title, key.data().delete);
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
                  <InputBase placeholder="title" value={this.state.title} onChange={this.handlechangeTitle}>
                  </InputBase>
                  <IconButton  >
                    <img className="pindrop2" src={image1} onClick={this.handlePin} />
                  </IconButton>
                </div>
                <div className="takeNoteCard">
                  <InputBase placeholder="take a note" value={this.state.takeNote} onChange={this.handlechangetakeNote}>
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
                  <IconButton className="unarcheive1" title="unArchive" onClick={this.handleunArchive}>
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
export default withRouter(remainderComponent)