import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {TextField, Card,Button} from '@material-ui/core'
export class Registration extends Component {
    constructor(){
        super();
        this.state={
        firstName:'',
        lastName:'',
        fullName:'',
        department:'',
        email:'',
        password:'',
        conformPassword:'',
        mobileNo:'',
        courseName:'',
        }
        }
    render() {
        return (
           
            <div className="Registration_container">
             <Card className="Registration_card"  style={{backgroundColor:'skyblue', width: '30em',height: '100vh' }}>  
              <center>
               <div>
                   <h2>FundooApp Registration</h2>
               </div>
               <TextField
               name="firstName"

               label="firstName"
               variant="standard"
               placeholder="firstName"
               onChange={this.handleChange}
               />
                <br/>
                 <TextField 
                 name="lastName"
                    label="lastName"
                    variant="standard"
                    placeholder="lastName"
                    onChange={this.handleChange}/>
                 <br/>
                 <TextField
                 name="firstName"
                    label="fullName"
                    variant="standard"
                    placeholder="fullName"
                    onChange={this.handleChange}/>
                 <br/>
                 <TextField
                 name="department"
                    label="department"
                    variant="standard"
                    placeholder="department"
                    onChange={this.handleChange}/>
                 <br/>
                 <TextField
                 name="emailAddress"
                    label="emailAddress"
                    variant="standard"
                    placeholder="emailAddress"
                    onChange={this.handleChange}/>
                 <br/>
                 <TextField
                 name="password"
                    label="password"
                    variant="standard"
                    placeholder="password"
                    onChange={this.handleChange}/>
                 <br/>
                 <TextField
                 name="confirm-Password"
                    label="confirm-Password"
                    variant="standard"
                    placeholder="confirm-Password"
                    onChange={this.handleChange}/>
                 <br/>
                 <TextField
                 name="mobileNo"
                    label="mobileNo"
                    variant="standard"
                    placeholder="mobileNo"
                    onChange={this.handleChange}/>
                 <br/>
                 <TextField
                 name="courseName"
                    label="courseName"
                    variant="standard"
                    placeholder="courseName"
                    onChange={this.handleChange}/>
                 <br/>
                 </center>
                 <div className="submit_Btn">
                    <div className="forgot_password" variant="contained" color="primary" placeholder="bottem-left">
                    <h5>ForgotPassword</h5>
                 </div>
                    </div>
                    <div>
                    <center>
                     <Button className="Registration_Btn" variant="contained" color="primary">
                        Register
                    </Button>
                    <Button className="cancel_Btn" variant="contained" color="default" style={{marginLeft:"20px"}}>
                        Cancel
                    </Button>
                    </center>
                    </div>
             </Card>
            </div>
        )
    }
}
export default withRouter(Registration)
