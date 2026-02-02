import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { dataBase } from "../../firebase/config";
import { setProperties } from "../../redux/properties/propertiesSlice";
import type { PropertyInput } from "../../interfaces";

const propertiesRef = collection(dataBase, "properties");

const PropertiesSubscriber = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(propertiesRef, (snapshot) => {
      const properties = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as PropertyInput),
      }));

      dispatch(setProperties(properties));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default PropertiesSubscriber;
