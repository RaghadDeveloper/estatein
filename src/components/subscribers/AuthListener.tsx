import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import { setUser } from "../../redux/user/userSlice";

const FirebaseAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      dispatch(setUser(firebaseUser));
    });
    return () => unsub();
  }, [dispatch]);

  return null;
};

export default FirebaseAuthListener;