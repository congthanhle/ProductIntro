import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { database } from "~/server/lib/firebase";

export const queryByCollection = async (col: string) => {
  const colRef = collection(database, col);
  const snapshot = await getDocs(colRef);
  
  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return docs;
};
export const query = (col: string, callback: (docs: any) => void) => {  
  const colRef = collection(database, col);  
    
  const unsubscribe = onSnapshot(colRef, (snapshot) => {  
    const docs = snapshot.docs.map((doc) => {  
      return {  
        ...doc.data(),  
        id: doc.id,  
      };  
    });  
    callback(docs);  
  });  
    
  return unsubscribe;  
};  
export const queryById = async (col: string, id: string) => {
  const colRef = collection(database, col);
  const docRef = doc(colRef, id);
  const docSnap = await getDoc(docRef);
  return {id, ... docSnap.data()};
};

export const add = async (col: string, document: Object) => {
  const colRef = collection(database, col);
  const docRef = await addDoc(colRef, document);
  return docRef;
};