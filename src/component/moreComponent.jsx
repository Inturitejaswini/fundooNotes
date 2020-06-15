
/******************************************************************************
 *  Execution       :   1. default node         cmd> node moreComponent.jsx 
 *                      2. if nodemon installed cmd> nodemodule moreComponent.jsx
 * 
 *  Purpose         : creating moreComponent card.
 *  @description    
 * 
 *  @file           :moreComponent.jsx
 *  @overview       : creating moreComponent problem.
 *  @module         :getNote - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :28-1-2019
 ******************************************************************************/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Popper, IconButton, Paper, Button } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { deleteNotes } from '../controller/noteController'
import Editlabel from '../component/editLable'
export class MoreComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: [],
            anchorEl: null,
            open: false,
            delete: false,
            key: ""
        }
    }
    handlemoremenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handleDelete = () => {
        this.setState({
            open: false,
            delete: this.state.delete,
            key: this.props.noteId
        });
        let delete1 = {
            key: this.props.noteId,
            delete: this.state.delete
        }
        deleteNotes(delete1).then((res) => {
        })
    }
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (
            <div>
                <IconButton className="morevert"
                    aria-describedby={id} type="button" onClick={this.handlemoremenu}>
                    <div className="moreverticon" title="more"><MoreVertIcon /></div>
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl} style={{ zIndex: "9999" }}>
                    <Paper className="more-paper">
                        <Button id="lablebutton1">
                            <div className="delete" onClick={this.handleDelete}>
                                Delete note</div>
                        </Button>
                        <Editlabel
                            editlabel={this.props.noteId}></Editlabel>
                        <Button id="lablebutton3">
                            <div className="adddrawing">
                                Add drawing</div>
                        </Button>
                    </Paper>
                </Popper>
            </div>
        )
    }
}

export default withRouter(MoreComponent)
