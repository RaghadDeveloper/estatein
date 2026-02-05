import { dataBase } from "../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import type { MemberType } from "../interfaces";

const teamRef = collection(dataBase, "team");

export const getTeam = async () => {
  const snapshot = await getDocs(teamRef);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
};

export const addMember = async (data: MemberType) => {
  return await addDoc(teamRef, data);
};

export const updateMember = async (id: string, data: Partial<MemberType>) => {
  const ref = doc(dataBase, "team", id);
  return await updateDoc(ref, data);
};

export const deleteMember = async (id: string) => {
  const ref = doc(dataBase, "team", id);
  return await deleteDoc(ref);
};
