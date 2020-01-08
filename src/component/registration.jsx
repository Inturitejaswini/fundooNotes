import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {TextField, Card,Button} from '@material-ui/core'
export class Registration extends Component {
    constructor(){
        super();
        this.state={
        firstName:'',
        firstNameError:'',
        lastName:'',
        lastNameError:'',
        fullName:'',
        fullNameError:'',
        department:'',
        departmentError:'',
        email:'',
        emailError:'',
        password:'',
        passwordError:'',
        conformPassword:'',
        conformPasswordError:'',
        mobileNo:'',
        mobileNoError:'',
        courseName:'',
        courseNameError:'',
        }
        }
        onchange=e=>{
           this.props.onChange({[e.target.name]:e.target.value});
          this.setState({
             [e.target.name]:e.target.value
          });
         };
         validate=()=>{
            let isError=false;
            const errors={};
            if(this.state.username.length<5){
               isError=true; 
               errors.usernameError="Usrename needs to be atleast 4 charecters long";           
            }
            if(isError){
               this.setState({
                  ...this.state,
                  ...errors
               });
            }
            return isError;
         }
  onSubmit=e=>{
     e.preventDefault();
     const err=this.Registrationvalidate();
     if(!err){
     this.setState({
      firstName:'',
      lastName:'',
      fullName:'',
      department:'',
      email:'',
      password:'',
      conformPassword:'',
      mobileNo:'',
      courseName:'',

     });
     this.props.onChange({
      firstName:'',
      lastName:'',
      fullName:'',
      department:'',
      email:'',
      password:'',
      conformPassword:'',
      mobileNo:'',
      courseName:'',

     })
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
               hintText="firstName"
               floatingLableText="firstName"
               value={this.state.firstName}
               onChange={e=>this.change(e)}
               errorText={this.state.firstNameError}
               floatingLabelFixed
               variant="standard"
               placeholder="firstName"
               />
                <br/>
                 <TextField 
                  name="lastName"
                  hintText="lastName"
                  floatingLableText="lastName"
                  value={this.state.lastName}
                  onChange={e=>this.change(e)}
                  errorText={this.state.lastNameError}
                  floatingLabelFixed
                    variant="standard"
                    placeholder="lastName"
                    />
                 <br/>
                 <TextField
                 name="fullName"
                 hintText="fullName"
                 floatingLableText="fullName"
                 value={this.state.fullName}
                 onChange={e=>this.change(e)}
                 errorText={this.state.fullNameError}
                 floatingLabelFixed
                    variant="standard"
                    placeholder="fullName"
                    />
                 <br/>
                 <TextField
                 name="department"
                 hintText="department"
                 floatingLableText="department"
                 value={this.state.department}
                 onChange={e=>this.change(e)}
                 errorText={this.state.departmentError}
                 floatingLabelFixed
                    label="department"
                    variant="standard"
                    placeholder="department"
                   />
                 <br/>
                 <TextField
                name="emailAddress"
                hintText="emailAddress"
                floatingLableText="emailAddress"
                value={this.state.emailAddress}
                onChange={e=>this.change(e)}
                errorText={this.state.emailAddressError}
                floatingLabelFixed
                    label="emailAddress"
                    variant="standard"
                    placeholder="emailAddress"
                    />
                 <br/>
                 <TextField
                     name="password"
                     hintText="password"
                     floatingLableText="password"
                     value={this.state.password}
                     onChange={e=>this.change(e)}
                     errorText={this.state.passwordError}
                     floatingLabelFixed
                    label="password"
                    variant="standard"
                    placeholder="password"
                    />
                 <br/>
                 <TextField
                name="conformPassword"
                hintText="conformPassword"
                floatingLableText="conformPassword"
                value={this.state.conformPassword}
                onChange={e=>this.change(e)}
                errorText={this.state.conformPasswordError}
                floatingLabelFixed
                    variant="standard"
                    placeholder="conformPassword"
                    />
                 <br/>
                 <TextField
                 name="mobileNo"
                 hintText="mobileNo"
                 floatingLableText="mobileNo"
                 value={this.state.mobileNo}
                 onChange={e=>this.change(e)}
                 errorText={this.state.mobileNoError}
                 floatingLabelFixed
                    label="mobileNo"
                    variant="standard"
                    placeholder="mobileNo"
                    />
                 <br/>
                 <TextField
           name="courseName"
           hintText="courseName"
           floatingLableText="courseName"
           value={this.state.courseName}
           onChange={e=>this.change(e)}
           errorText={this.state.courseNameError}
           floatingLabelFixed
                    label="courseName"
                    variant="standard"
                    placeholder="courseName"
                   />
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
