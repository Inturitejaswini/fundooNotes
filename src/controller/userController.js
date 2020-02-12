/**
 * registration form.
 */
import firebase from 'firebase'
import jwt from 'jsonwebtoken'
import serviceConstant from '../const'
//import Registration from '../component/registration'
import fire from '../config/fire'
const db = firebase.firestore();
export default async function register(data){
console.log( "data in  in registration",data);
const user={
firstName:data.firstName,
lastName:data.lastName,
fullName:data.fullName,
email:data.email,
password:data.password
}
try {
    console.log("data in usercontroller",user)
let response=await fire.auth().createUserWithEmailAndPassword(data.email,data.password)
console.log("this is firebase",response);
let currentUser=fire.auth().currentUser.uid
console.log( "current user data in registration",currentUser);
let userdetails= db.collection('users').doc(currentUser).set(user);
console.log("register succes",userdetails)
let verification=fire.auth().currentUser.sendEmailVerification();
console.log("verification success",verification)
return response;
}
catch (error) {
console.log(error)
return error.message
}
}
/**
 * @param {data} data as a perameter.
 * login data form
 */
export  async function Log(data){
    //console.log("login enterd into controller",data)
    let user={
    email:data.email,
    password:data.password,
    }
    //console.log("data is came",userData)
    let response=await fire.auth().signInWithEmailAndPassword(data.email,data.password);
    console.log("sighned",response)
    let currentUser=fire.auth().currentUser.uid
    console.log( "current user data",currentUser);
    let userdetails= db.collection('users').doc(currentUser);
    console.log("login succes",userdetails)
    await userdetails.get().then(function(doc){
        const payload={
          email:serviceConstant.firebaseAuthorization.currentUser.email,
          password:serviceConstant.firebaseAuthorization.currentUser.password,
        }
        let token=jwt.sign(payload,serviceConstant.firebaseAuthorization.currentUser.uid, {
          expiresIn:1140
        })
      localStorage.setItem('usertoken',token)
     // console.log("jwt web token generated",JSON.stringify(userData))
    
      })
    return response;
    
    }
 /**
  * 
  * @param {data} data as a perameter
  */
 
export  async function forgot(data){
let user= {
email:data.email
}
try{
console.log("enterd in controller");
let response=await fire.auth().sendPasswordResetEmail(data.email);
console.log("reset mail send",response);
return response;
}
catch(error){
console.log(error);
return error.message
}
}