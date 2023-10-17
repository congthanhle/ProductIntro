import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'todo-list-33b6c.firebaseapp.com',
  projectId: 'todo-list-33b6c',
  storageBucket: 'todo-list-33b6c.appspot.com',
  messagingSenderId: '703838550422',
  appId: '1:703838550422:web:34ed7d1420780d2f9f85b7',
  measurementId: 'G-QRRS6NGME1'
}

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)
export { database }