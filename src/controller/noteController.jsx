import firebase from 'firebase'
import fire from '../config/fire'
const db = firebase.firestore();
export async function notes(data) {
console.log("data enterd in note controller",data);
let userData = {
title:data.title,
takeNote:data.takeNote
}
console.log("data is came",userData)
let response=await db.collection("notes").doc().set(userData)
console.log("data enterd into firebase")
return response;
}