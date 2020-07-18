/**
 * @param {notes} data as a perameter
 */
import firebase from "firebase";
import serviceConstant from "../const";
import fire from "../config/fire";
import jwt_decode from "jwt-decode";
const db = firebase.firestore();
export async function notes(data) {
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    archive: data.archive,
    delete: data.delete,
    pin: data.pin,
    key: data.key,
    remainder: data.remainder,
    note: data.note,
  };
  try{
  let response = await db.collection("notes").add(userData);
  return response;
  }catch(err){
    return err;
  }
}

/**
 * get notes
 */
export async function getNotes() {
  try {
    let note = [];
    let response = await db
      .collection("notes")
      .get()
      .then((res) => {
        res.forEach((data) => {
          note.push(data);
        });
      });
    return note;
  } catch (error) {
    return error.message;
  }
}
/**
 *
 * @param {data} data  as a perameter
 */
export async function noteUpdate(data) {
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key,
  };
  try{
  let response = await serviceConstant.firestore
    .collection("notes")
    .doc(data.key)
    .update(userData);
  return response;
  }catch(err){
    return err;
  }
}

export async function deleteNotes(data) {
  let userData = {
    key: data.key,
    delete: data.delete,
  };
  try{
  if (userData.delete == false) {
    userData.delete = true;
  } else {
    userData.delete = false;
  }
  let response = await serviceConstant.firestore
    .collection("notes")
    .doc(userData.key)
    .update(userData);
  return response;
}catch(err){
  return err;
}
}

export async function archiveNotes(data) {
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key,
    archive: data.archive,
  };
  try{
  if (userData.archive == false) {
    userData.archive = true;
  } else {
    userData.archive = false;
  }
  let response = await serviceConstant.firestore
    .collection("notes")
    .doc(data.key)
    .update(userData);
  return response;
}catch(err){
  return err;
}
}
export async function ArchiveNotesCreate(data) {
  const token = localStorage.usertoken;
  const decodedJwt = jwt_decode(token);
  let currentuser = fire.auth().currentUser.email;
  let emailid = localStorage.setItem("notes", currentuser);
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    email: currentuser,
    archive: data.archive,
    token_id: token,
  };
  try{
  if (userData.archive == false) {
    userData.archive = true;
  } else {
    userData.archive = false;
  }
  let response = await db.collection("notes").add(userData);
  return response;
}catch(err){
  return err;
}
}
export async function unArchiveNotes(data) {
  let userData = {
    key: data.key,
    archive: data.archive,
  };
  try{
  if (userData.archive == false) {
    userData.archive = true;
  } else {
    userData.archive = false;
  }
  let response = await serviceConstant.firestore
    .collection("notes")
    .doc(data.key)
    .update(userData);
  return response;
}catch(err){
  return err;
}
}

export async function deleteNotesPermenently(data) {
  let userData = {
    key: data.key,
  };
  try{
  let response1 = await serviceConstant.firestore
    .collection("notes")
    .doc(data.key)
    .delete();
  return response1;
}catch(err){
  return err;
}
}

export async function restoreNotes(data) {
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key,
    delete: data.delete,
  };
  try{
  if (userData.delete == false) {
    userData.delete = true;
  } else {
    userData.delete = false;
  }
  let response1 = await serviceConstant.firestore
    .collection("notes")
    .doc(data.key)
    .update(userData);
  return response1;
}catch(err){
  return err;
}
}

export async function updatePin(data) {
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key,
    pin: data.pin,
  };
  try{
  if (userData.pin == false) {
    userData.pin = true;
  } else {
    userData.pin = false;
  }
  let response = await serviceConstant.firestore
    .collection("notes")
    .doc(data.key)
    .update(userData);
  return response;
}catch(err){
  return err;
}
}

export async function updateUnPin(data) {
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key,
    pin: data.pin,
  };
  try{
  if (userData.pin == false) {
    userData.pin = true;
  } else {
    userData.pin = false;
  }
  let response = await serviceConstant.firestore
    .collection("notes")
    .doc(data.key)
    .update(userData);
  return response;
}catch(err){
  return err;
}
}

export async function remainder(data) {
  let userData = {
    remainder: data.timeDate,
    key: data.key,
  };
  try{
  let response = await serviceConstant.firestore
    .collection("notes")
    .doc(data.key)
    .update(userData);
  return response;
}catch(err){
  return err;
}
}

export async function checkBox(data) {
  let userData = {
    checkBox: data.checkBox,
    labelkey: data.labelkey,
  };
  try{
  if (userData.checkBox == false) {
    userData.checkBox = true;
  } else {
    userData.checkBox = false;
  }
  let response = await serviceConstant.firestore
    .collection("labels")
    .doc(data.labelkey)
    .update(userData);
  return response;
}catch(err){
  return err;
}
}

export async function getLabelsCard() {
  try {
    const token = localStorage.usertoken;
    const decodedJwt = jwt_decode(token);
    var labels = [];
    await serviceConstant.firestore
      .collection("labels")
      .where("email", "==", decodedJwt.email)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          labels.push(doc);
        });
      });
    return labels;
  } catch (error) {
    return error.message;
  }
}

export async function createLabelNotes(data) {
  const token = localStorage.usertoken;
  const decodedJwt = jwt_decode(token);
  let currentuser = fire.auth().currentUser.email;
  let emailid = localStorage.setItem("notes", currentuser);
  let userData = {
    label: data.takeNote,
    email: currentuser,
    key: data.key,
    checkBox: data.checkBox,
  };
  try{
  let response = await db.collection("labels").add(userData);
  let userdata1 = {
    labelkey: response.id,
  };
  return response;
}catch(err){
  return err;
}
}

export async function getLabels(data) {
  try {
    let userData = {
      key: data.key,
    };
    let labels = [];
    await serviceConstant.firestore
      .collection("labels")
      .where("key", "==", userData.key)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          labels.push(doc);
        });
      });
    return labels;
  } catch (error) {
    return error.message;
  }
  }

export async function updateLabel(data) {
  let userData = {
    key: data.key,
    label: data.label,
  }
  try{
  let response = await serviceConstant.firestore
    .collection("labels")
    .doc(data.key)
    .update(userData);
  return response;
}catch(err){
  return err;
}
}

export async function UpdateColors(data) {
  let noteColor = {
    key: data.key,
    color: data.color,
  };
  try{
  let response = await serviceConstant.firestore
    .collection("notes")
    .doc(data.key)
    .update(noteColor);
  return response;
}catch(err){
  return err;
}
}
