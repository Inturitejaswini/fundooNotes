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
                     placeholder="firstName">
                </TextField>
                <br/>
                 <TextField 
                    label="lastName"
                    variant="standard"
                    placeholder="lastName">
                 </TextField>
                 <br/>
                 <TextField
                    label="fullName"
                    variant="standard"
                    placeholder="fullName">
                 </TextField>
                 <br/>
                 <TextField
                    label="address"
                    variant="standard"
                    placeholder="address">
                 </TextField>
                 <br/>
                 <TextField
                    label="emailAddress"
                    variant="standard"
                    placeholder="emailAddress">
                 </TextField>
                 <br/>
                 <TextField
                    label="password"
                    variant="standard"
                    placeholder="password">
                  <div class="col-md-6">
                  <input id="password-field"  class="feild-Icon" name="password" value="secret"/>
                  <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                  </div>
                 </TextField>
                 <br/>
                 <TextField
                    label="confirm-Password"
                    variant="standard"
                    placeholder="confirm-Password">
                 </TextField>
                 <br/>
                 <TextField
                    label="mobileNo"
                    variant="standard"
                    placeholder="mobileNo">
                 </TextField>
                 <br/>
                 <TextField
                    label="courseName"
                    variant="standard"
                    placeholder="courseName">
                  <select>
                   <option value="java">Java</option>
                   <option value="python">Python</option>
                   <option value="react">Reactjs</option>
                   <option value=".net">.Net</option>
                   </select>
                 </TextField>
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
                        Registration
                    </Button>
                    <Button className="cancel_Btn" variant="contained" color="default">
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
