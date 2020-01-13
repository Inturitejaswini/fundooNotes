

import fire from './config/fire.js'
var serviceConstant={
    firebaseAuthorization:fire.auth(),
    firestore:fire.firestore()
}
export default serviceConstant;
