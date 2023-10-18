import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc
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