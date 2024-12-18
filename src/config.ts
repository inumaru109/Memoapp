import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyBRsSaiaN3ihL2w-8x9Cb6YC4VmprauEYk",
    authDomain: "memoapp-8e9a1.firebaseapp.com",
    projectId: "memoapp-8e9a1",
    storageBucket: "memoapp-8e9a1.firebasestorage.app",
    messagingSenderId: "77840674542",
    appId: "1:77840674542:web:21d412072745868b024dff"
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
