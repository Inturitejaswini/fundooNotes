
import serviceConstant from '../const'
export default async function registration(data){
    let response=await serviceConstant.firebaseAuthorization.collection('user').createUserWithEmailAndPassword(data.email,data.password)
}