import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Popper, IconButton, Paper, Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { deleteNotes } from "../controller/noteController";
import EditLabel from "./drawerLable";
export class MoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      anchorEl: null,
      open: false,
      delete: false,
      key: "",
    };
  }
  handleMoreMenu = (event) => {
    this.setState({
      anchorEl: this.state.anchorEl ? null : event.currentTarget,
    });
  };
  handleDelete = () => {
    let deleteData = {
      key: this.props.noteId,
      delete: this.state.delete,
    };
    deleteNotes(deleteData)
      .then((res) => {
        this.setState({
          open: false,
          delete: this.state.delete,
          key: this.props.noteId,
        });
      })
      .catch((err) => {
        throw err;
      });
  };
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const moreComponentId = open ? "simple-popper" : undefined;
    return (
      <div>
        <IconButton
          className="morevert"
          aria-describedby={id}
          type="button"
          onClick={this.handlemoremenu}
        >
          <div className="moreverticon" title="more">
            <MoreVertIcon />
          </div>
        </IconButton>
        <Popper
          id={moreComponentId}
          open={open}
          anchorEl={anchorEl}
          className="more-poper-Paper"
        >
          <Paper className="more-paper">
            <Button id="delete-lable-button">
              <div className="delete" onClick={this.handleDelete}>
                Delete note
              </div>
            </Button>
            <EditLabel editlabel={this.props.noteId}></EditLabel>
            <Button id="addDrawing-lable-button">
              <div className="adddrawing">Add drawing</div>
            </Button>
          </Paper>
        </Popper>
      </div>
    );
  }
}

export default withRouter(MoreComponent);
