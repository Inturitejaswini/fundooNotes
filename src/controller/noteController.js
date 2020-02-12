/**
 * @param {notes} data as a perameter
 */
import firebase from 'firebase'
import serviceConstant from '../const'
import fire from '../config/fire'
import jwt_decode from 'jwt-decode'
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
    note: data.note
  }
  //console.log("data is came",userData.token_id)
  let response = await db.collection("notes").add(userData)
  console.log("data enterd into firebase", response.id)
  return response;
}

/**
 * get notes 
 */
export async function getnotes() {
  try {
    console.log("data token")
    let note = []
    console.log("data enterd into controller")
    let response = await db.collection("notes").get()
      .then(res => {
        res.forEach(data => {
          console.log("notedata", data.data());
          note.push(data)
        });
      })
    return note;
  }
  catch (error) {
    return error.message
  }
}
/**
 * 
 * @param {data} data  as a perameter
 */
export async function noteUpdate(data) {
  console.log("dat in controller", data);
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key
  }
  console.log("data is updated", userData.key)
  let response = await serviceConstant.firestore.collection('notes').doc(data.key).update(userData);
  console.log("data is updated", response)
  return (response)
}


export async function deleteNotes(data) {
  console.log("dat in controller", data);
  let userData = {
    key: data.key,
    delete: data.delete
  }
  console.log("data came to controller", userData.delete)
  if (userData.delete == false) {
    userData.delete = true
  }
  else {
    userData.delete = false
  }
  let response = await serviceConstant.firestore.collection('notes').doc(userData.key).update(userData);
  console.log("data is updated", response)
}

export async function ArchiveNotes(data) {
  console.log("dat in controller", data.archive);
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key,
    archive: data.archive,
  }
  console.log("data came to controller", userData.archive)
  if (userData.archive == false) {
    userData.archive = true
  }
  else {
    userData.archive = false
  }
  let response = await serviceConstant.firestore.collection('notes').doc(data.key).update(userData);
  console.log("data is updated", response)

}
export async function ArchiveNotescreate(data) {
  //console.log("data enterd in note controller",data);
  const token = localStorage.usertoken
  const decodedJwt = jwt_decode(token)
  console.log("jwt web token is generated", decodedJwt)
  let currentuser = fire.auth().currentUser.email;
  let emailid = localStorage.setItem('notes', currentuser);
  //console.log("data enterd in note controller",currentuser);
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    email: currentuser,
    archive: data.archive,
    token_id: token
  }
  //console.log("data is came",userData.token_id)
  if (userData.archive == false) {
    userData.archive = true
  }
  else {
    userData.archive = false
  }
  let response = await db.collection("notes").add(userData)
  console.log("data enterd into firebase", response.id)
  return response;
}
export async function unArchiveNotes(data) {
  console.log("dat in controller", data.archive);
  let userData = {
    key: data.key,
    archive: data.archive,
  }
  //console.log("data came to controller",userData.delete)
  if (userData.archive == false) {
    userData.archive = true
  }
  else {
    userData.archive = false
  }
  let response = await serviceConstant.firestore.collection('notes').doc(data.key).update(userData);
  console.log("data is updated", response)

}

export async function deleteNotesPermenently(data) {
  console.log("dat in controller", data.key);
  let userData = {
    key: data.key,
  }
//  console.log("data is coming to firebase",userData.key);
  let response1 = await serviceConstant.firestore.collection('notes').doc(data.key).delete();
  console.log("data is restored", response1)
return response1;
}

export async function restoreNotes(data) {
  console.log("dat in controller", data.delete);
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key,
    delete: data.delete
  }
  console.log("data came to controller",userData.delete)
  if (userData.delete == false) {
    userData.delete = true
  }
  else {
    userData.delete = false
  }
  let response1 = await serviceConstant.firestore.collection('notes').doc(data.key).update(userData);
  console.log("data is restored", response1)
return response1;
}


export async function updatePin(data) {
  //console.log("dat in controller",data.pin);
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key,
    pin: data.pin
  }
  //console.log("data came to controller",userData.delete)
  if (userData.pin == false) {
    userData.pin = true
  }
  else {
    userData.pin = false
  }
  let response = await serviceConstant.firestore.collection('notes').doc(data.key).update(userData);
  console.log("data is restored", response)

}

export async function updateunPin(data) {
  //console.log("dat in controller",data.pin);
  let userData = {
    title: data.title,
    takeNote: data.takeNote,
    key: data.key,
    pin: data.pin
  }
  //console.log("data came to controller",userData.delete)
  if (userData.pin == false) {
    userData.pin = true
  }
  else {
    userData.pin = false
  }
  let response = await serviceConstant.firestore.collection('notes').doc(data.key).update(userData);
  console.log("data is restored", response)
return response
}

export async function remainder(data) {
  console.log("dat in controller", data.key);
  let userData = {
    remainder: data.timeDate,
    key: data.key,
  }
  let response = await serviceConstant.firestore.collection('notes').doc(data.key).update(userData);
  console.log("data is stored", response)
  return response
}

export async function checkbox(data) {
  console.log("dat in controller", data.checkBox);
  let userData = {
    checkBox: data.checkBox,
    labelkey: data.labelkey
  }
  console.log("data came to controller", userData.checkBox, userData.labelkey)
  if (userData.checkBox == false) {
    userData.checkBox = true
  }
  else {
    userData.checkBox = false
  }
  let response = await serviceConstant.firestore.collection("labels").doc(data.labelkey).update(userData);
  console.log("data is restored", response)
  return response
}
export async function getlabelscard() {
  try {
    const token = localStorage.usertoken
    const decodedJwt = jwt_decode(token)
    console.log("getting notes with particular email", decodedJwt)
    //console.log("getting notes with particular note key",userData.key)
    var labels = [];
    //console.log("checking purpose",token)
    await serviceConstant.firestore.collection("labels").where("email", "==", decodedJwt.email).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log("labels of ", doc.data())
        labels.push(doc)
        console.log("notes of", labels.label, labels.checkBox)
      });
    })
    console.log("labels are pushed into an array", labels);
    return labels
  }
  catch (error) {
    return error.message
  }
}


export async function createlabelnotes(data) {
  console.log("data enterd in note controller", data);
  const token = localStorage.usertoken
  const decodedJwt = jwt_decode(token)
  console.log("jwt web token is generated", decodedJwt)
  let currentuser = fire.auth().currentUser.email;
  let emailid = localStorage.setItem('notes', currentuser);
  console.log("data enterd in note controller", currentuser);
  let userData = {
    label: data.takeNote,
    email: currentuser,
    key: data.key,
    checkBox: data.checkBox
  }
  console.log("data is came", userData.label, userData.key)
  let response = await db.collection("labels").add(userData)
  console.log("data enterd into firebase", response.id, response.label)
  let userdata1 = {
    labelkey: response.id
  }
  return response;
}

export async function getlabels(data) {
  try {

    let userData = {
      key: data.key
    }
    var labels = [];
    //console.log("checking purpose",token)
    await serviceConstant.firestore.collection("labels").where("key", "==", userData.key).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log("labels of ", doc.data())
        labels.push(doc)
        console.log("notes of", labels)
      });
    })
    console.log("labels are pushed into an array", labels);
    return labels
  }
  catch (error) {
    return error.message
  }
}
export async function updateLabel(data) {
  console.log("dat in controller", data);
  let userData = {
    key: data.key,
    label: data.label
}
  console.log("data is updated", userData.key)
  let response = await serviceConstant.firestore.collection('labels').doc(data.key).update(userData);
  console.log("data is updated---->", response)
  return (response)
}

export async function Updatecolors(data) {
  console.log("dat in controller", data);
  let noteColor = {
    key: data.key,
    color: data.color
}
  console.log("data is updated", noteColor.key)
  let response = await serviceConstant.firestore.collection('notes').doc(data.key).update(noteColor);
  console.log("data is updated", response)
  return (response)
}


