// serviceConstant from '../const'
import firebase from 'firebase'
//import Registration from '../component/registration'
import fire from '../config/fire'
const db = firebase.firestore();
export  default async function Register(data){
console.log(data);
const user={
firstName:data.firstName,
lastName:data.lastName,
fullName:data.fullName,
email:data.email,
password:data.password,
}
try {
let response=await fire.auth().createUserWithEmailAndPassword(data.email,data.password);
console.log('this is firebase',response)
// //this is my url
let currentUser=fire.auth().currentUser.uid
console.log( "current user data",currentUser);
let userdetails= db.collection('users').doc(currentUser).set(user);
console.log("register succes",userdetails)
}
catch (error) {
console.log(error)
return error.message
}
}

export  async function Log(data){
    //console.log("login enterd into controller",data)
    let user={
    email:data.email,
    password:data.password,
    }
    //console.log("data is came",userData)
    try{
    let response=await fire.auth().signInWithEmailAndPassword(data.email,data.password);
    console.log("sighned",response)
    let currentUser=fire.auth().currentUser.uid
    console.log( "current user data",currentUser);
    let userdetails= db.collection('users').doc(currentUser);
    console.log("login succes",userdetails)
    }
    catch(error){
    console.log(error)
    return error.message
    }
    }

    export  async function Forgot(data){
        //console.log("login enterd into controller",data)
        let user={
         newpassword:data.newpassword,
         confirmpasword:data.confirmpasword,
        }
        //console.log("data is came",userData)
        try{
        let response=await fire.auth().sendPasswordResetEmail(data.newpassword,data.confirmpasword);
        console.log("sighned",response)
        let currentUser=fire.auth().currentUser.uid
        console.log( "current user data",currentUser);
        let userdetails= db.collection('users').doc(currentUser).set(user);
        console.log("login succes",userdetails)
        }
        catch(error){
        console.log(error)
        return error.message
        }
        }