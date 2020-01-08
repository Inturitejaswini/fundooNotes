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
        address:'',
        email:'',
        password:'',
        conformPassword:'',
        mobileNo:'',
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
                     label="firstName"
                     variant="standard"
                     placeholder="firstName"/>
                <br/>
                 <TextField 
                    label="lastName"
                    variant="standard"
                    placeholder="lastName"/>
                 <br/>
                 <TextField
                    label="fullName"
                    variant="standard"
                    placeholder="fullName"/>
                 <br/>
                 <TextField
                    label="address"
                    variant="standard"
                    placeholder="address"/>
                 <br/>
                 <TextField
                    label="emailAddress"
                    variant="standard"
                    placeholder="emailAddress"/>
                 <br/>
                 <TextField
                    label="password"
                    variant="standard"
                    placeholder="password"/>
                 <br/>
                 <TextField
                    label="confirm-Password"
                    variant="standard"
                    placeholder="confirm-Password"/>
                 <br/>
                 <TextField
                    label="mobileNo"
                    variant="standard"
                    placeholder="mobileNo"/>
                 <br/>
                 <TextField
                    label="courseName"
                    variant="standard"
                    placeholder="courseName"/>
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
