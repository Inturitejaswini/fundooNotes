import jwt from 'jsonwebtoken';
import firebaseAuthorization from '../const'
import serviceConstant from '../const'
export default async function Register(data){
 console.log("data in controller",data);
try {
const user = {
fullName: data.fullName,
email: data.email,
password:data.password,
}
console.log("data in controller",user);

let response=await serviceConstant.firebaseAuthorization.collection('user').createUserWithEmailAndPassword(user.email,user.password);
let userdetails= await serviceConstant.firestore.collection('user').doc(user.response.email,user.response.password).set(user);
userdetails.get().then(function(doc){
const details1={
"userId":response.uid,
"email":response.email,
}
let token=jwt.sign(details1,firebaseAuthorization.collection('user').uid,{
expiresIn:1440
})
})
return userdetails
}                                                    
catch (error) {
console.log(error)
return error.message
}
}
// export async function Login(user) {
// try {
// let userLogin=await serviceConstant.firebaseAuthorization.signInWithEmailAndPassword(user.email,user.password)
// let userData = await serviceConstant.firestore.collection("users").doc(userLogin.user.uid)
// await userData.get().then(function (doc) {
// const payload = {
// user_id:userLogin.user.uid,
// email: userLogin.user.email,
// fullName: doc.data().fullName,
// }
// let token = jwt.sign(payload, 'hsdyusd99d787sd7sjd89sdsd', {
// expiresIn: 1440
// })
// localStorage.setItem('usertoken', token)
// })
// return userLogin
// }
// catch (error) {
// console.log(error)
// return error.message
// }
// }
