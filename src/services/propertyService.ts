import { dataBase } from "../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import type { PropertyData, PropertyInput } from "../interfaces";

const propertiesRef = collection(dataBase, "properties");

export const getProperties = async () => {
  const snapshot = await getDocs(propertiesRef);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    title: docSnap.data().title || "",
    subTitle: docSnap.data().subTitle || "",
    description: docSnap.data().description || "",
    photos: docSnap.data().photos || [],
    price: docSnap.data().price || 0,
    bedrooms: docSnap.data().bedrooms || 0,
    bathrooms: docSnap.data().bathrooms || 0,
    location: docSnap.data().location || "",
    locationType: docSnap.data().locationType || "",
    propertyType: docSnap.data().propertyType || "",
    area: docSnap.data().area || 0,
  }));
};

export const addProperty = async (data: PropertyInput) => {
  return await addDoc(propertiesRef, data);
};

export const updateProperty = async (
  id: string,
  data: Omit<PropertyData, "id">,
) => {
  const ref = doc(dataBase, "properties", id);
  return await updateDoc(ref, data);
};

export const deleteProperty = async (id: string) => {
  const ref = doc(dataBase, "properties", id);
  return await deleteDoc(ref);
};
