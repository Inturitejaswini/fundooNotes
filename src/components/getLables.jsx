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
import { InputBase,Button } from '@material-ui/core';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { getLabelsCard } from '../controller/noteController'
class GetLabels extends Component {
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
        getLabelsCard()
            .then(res => {
                this.setState({
                    noteArray: res
                })
            })

    }
    handleComponet = (label) => {
        this.props.history.push('/labelt',label)

    }
    render() {
        var pinData = this.state.noteArray.map(key1 => {
            return (
                <div className="getting_labels_inDrawercomponent">
                    <Button id="abcd1" onClick={this.handleGetNotes}> 
                     <LabelOutlinedIcon className="labelbtnicon"/>
                    <InputBase id="labelssize1" value={key1.data().label} onClick={() =>this.handleComponet(key1.data().label)} />
                    </Button>
                </div>
            )
        })
        return (
            <div>{pinData}</div>
        )
    }
}
export default withRouter(GetLabels)