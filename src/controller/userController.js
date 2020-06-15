/**
 * registration form.
 */
import firebase from 'firebase'
import jwt from 'jsonwebtoken'
import serviceConstant from '../const'
import fire from '../config/fire'
const db = firebase.firestore();
export default async function register(data){
const user={
firstName:data.firstName,
lastName:data.lastName,
fullName:data.fullName,
email:data.email,
password:data.password
}
try {
let response=await fire.auth().createUserWithEmailAndPassword(data.email,data.password)
let currentUser=fire.auth().currentUser.uid
let userdetails= db.collection('users').doc(currentUser).set(user);
let verification=fire.auth().currentUser.sendEmailVerification();
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
    let user={
    email:data.email,
    password:data.password,
    }
    let response=await fire.auth().signInWithEmailAndPassword(data.email,data.password);
    let currentUser=fire.auth().currentUser.uid
    let userdetails= db.collection('users').doc(currentUser);
    await userdetails.get().then(function(doc){
        const payload={
          email:serviceConstant.firebaseAuthorization.currentUser.email,
          password:serviceConstant.firebaseAuthorization.currentUser.password,
        }
        let token=jwt.sign(payload,serviceConstant.firebaseAuthorization.currentUser.uid, {
          expiresIn:1140
        })
      localStorage.setItem('usertoken',token)
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
let response=await fire.auth().sendPasswordResetEmail(data.email);
return response;
}
catch(error){
return error.message
}
}