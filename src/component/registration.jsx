import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card,Button,Input} from '@material-ui/core'
import Register from '../controller/userController'
export class Registration extends Component {
   constructor() {
      super();
      this.state = {
         firstName:this.firstName,
         lastName:this.lastName,
         fullName: this.fullName,
         email: this.email,
         password:this.password,
         // firstNameError:'',
         // lastNameError:'',
         // fullNameError: '',
         // emailError: '',
         // passwordError: '',
      }
      // 
      // this.handleChangeFirstName=this.handleChangeFirstName.bind(this);
      // this.handleChangeLastName=this.handleChangeLastName.bind(this);
      // this.handleChangeFullName=this.handleChangeFullName.bind(this);
      // this.handleChangeEmail = this.handleChangeEmail.bind(this);
      // this.handleChangePassword = this.handleChangePassword.bind(this);
   }
   handleChangeFirstName = (event) => {
      this.setState({ firstName: event.target.value });
      console.log("firstname", this.state.firstName);

   };
   handleChangeLastName = (event) => {
      this.setState({ lastName: event.target.value });
      console.log("lastname", this.state.lastName);

   };
   handleChangeFullName = (event) => {
      this.setState({ fullName: event.target.value });
      console.log(" fullname", this.state.fullName);

   };
   handleChangeEmail = (event) => {
      this.setState({ email: event.target.value });
      console.log("email", this.state.email);
 
   };
   handleChangePassword = (event) => {
      this.setState({ password: event.target.value });
      console.log("password", this.state.password);

   };
//    validate = () => {
//       let firstNameError="";
//       let lastNameError="";
//       let fullNameError = "";
//       let emailError = "";
//       let passwordError = "";
//       if (!this.state.firstName) {
//          firstNameError = "*firstName cannot be empty";
//       }
//       if (!this.state.lastName) {
//          lastNameError = "*lastName cannot be empty";
//       }
//       if (!this.state.password) {
//          passwordError = "*password cannot be empty";
//       }
//       if (!this.state.fullName) {
//          fullNameError = "*name cannot be empty";
//       }
//       if (!this.state.email.includes('@')) {
//          emailError = '*inavlid emailid';
//       }

//       if (emailError || fullNameError || passwordError||firstNameError||lastNameError) {
//          this.setState({ emailError, fullNameError, passwordError,firstNameError,lastNameError});
//          return false;
//       }
//       return true;
//    }
//    handleSubmit(event) {
//       event.preventDefault();
//       const isValid = this.validate();
//       if (isValid) {
//           console.log(this.state)
//       }
//   };
   handleRegister = () => {
      const user = {
         firstName:this.state.firstName,
         lastName:this.state.lastName,
         fullName: this.state.fullName,
         email: this.state.email,
         password: this.state.password,
      }
      console.log("new user dateils", user);
      Register(user).then(()=>{
      //console.log(response.data);
      })
     this.props.history.push('/login')
   }
  
   render() {
      return (
            <div className="registartion_container">
               <center>
                  <Card style={{
                     justifyContent: 'center', width: '25em', height: '80vh',
                     marginTop: '60px', backgroundColor: '#FFFF99'}}>
                     <center>
                        <div >
                           <h2><a href="/"><font color="	#800080">Registration</font>
                           </a></h2>
                        </div>
                     </center>
                     <div className="firstName-text">
                     <Input className="input-text"
                     type="firstName" 
                     placeholder="firstName"
                     onChange= {this.handleChangeFirstName}/>
                    </div>
                    <div className="lastName-text">
                     <input className="input-text"
                      type="lastName"
                       placeholder="lastName" 
                       onChange= {this.handleChangeLastName}
                      style={{width:"200px" ,backgroundColor: '#FFFF99'}}/>
                    </div>
                    <div className="fullname-text">
                     <Input className="input-text" 
                     type="fullName" 
                     placeholder="fullName" 
                     onChange= {this.handleChangeFullName}/>
                    </div>
                    <div className="email-text">
                     <Input className="input-text" 
                     type="email" 
                     placeholder="email" 
                     onChange= {this.handleChangeEmail}/>
                    </div>
                    <div className="password-text">
                     <Input className="input-text" 
                     type="password" 
                     placeholder="password" 
                     onChange= {this.handleChangePassword}/>
                    </div>
                     <div className="form-group">
                        <Button onClick={this.handleRegister} type="submit" style={{ marginRight: '50px',marginTop:'40px' }} color="primary">
                           Register
                           </Button>
                        <Button type="submit" style={{ marginTop:'40px',marginLeft:'50px' }} >
                           Cancel
                        </Button>
                     </div>
                  </Card>
               </center>
            </div>
      )
   }
}
export default withRouter(Registration);
