/******************************************************************************
* Execution : 1. default node cmd> node getLabels.jsx 
* 2. if nodemon installed cmd> nodemodule getLabels.jsx
* 
* Purpose : create getLabels page.
* @description 
* 
* @file :getLabels.jsx
* @overview :getLabels form problem.
* @module :getLabels - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-28-01-2020
******************************************************************************/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { InputBase } from '@material-ui/core';
import { Button } from '@material-ui/core';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { getlabelscard } from '../controller/noteController'
class Getlabels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: [],
            anchorEl: null,
            open: false,
            delete: false,
            key: "",
            label:""
        }
    }
    componentDidMount = () => {
        this.getAllLables();
    }
    getAllLables = () => {
        getlabelscard()
            .then(res => {
                console.log("dataaaaaaa for labels", res);
                this.setState({
                    noteArray: res
                })
                console.log("noteData", this.state.noteArray)
            })

    }
    handleComponet = (label) => {
        this.props.history.push('/labelComponent',label)

    }
    render() {
        var pinData = this.state.noteArray.map(key1 => {
            console.log("to get labels in get note component", key1.data().label, key1.data().checkBox)
            return (
                <div className="getting_labels_inDrawercomponent">
                    <Button id="abcd1" onClick={this.handlegetnotes}> 
                    {/* <div id="getlabel-div"> */}
                     <LabelOutlinedIcon className="labelbtnicon"/>
                    <InputBase id="labelssize1" value={key1.data().label} onClick={() =>this.handleComponet(key1.data().label)} />
                    </Button>
                </div>
            )
        })
        return (
            <div>
                {pinData}</div>
        )
    }
}
export default withRouter(Getlabels)