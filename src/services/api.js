import {
  collection,
  getDocs,
  where,
  query as firestoreQuery,
} from "firebase/firestore";
import { db } from "./firebase";

export const getProducts = async () => {
  const productsCollection = await collection(db, "products");

  const snapshot = await getDocs(productsCollection);

  const getProducts = await snapshot.docs.map((doc) => {
    const id = doc.id;
    const product = doc.data();
    return {
      id: id,
      name: product.name,
      image: product.image,
      price: product.price,
    };
  });
  return getProducts;
};

export const userExist = async (email, password) => {
  const usersCollection = collection(db, "users");

  const query = firestoreQuery(
    usersCollection,
    where("email", "==", email),
    where("password", "==", password)
  );

  const snapshot = await getDocs(query);

  return !snapshot.empty;
};
