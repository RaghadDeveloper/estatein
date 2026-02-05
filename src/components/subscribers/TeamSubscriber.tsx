import { collection, onSnapshot } from "firebase/firestore";
import { dataBase } from "../../firebase/config";
import { setTeam } from "../../redux/team/teamSlice";
import type { MemberType } from "../../interfaces";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const teamRef = collection(dataBase, "team");

const TeamSubscriber = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(teamRef, (snapshot) => {
      const team = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as MemberType),
      }));

      dispatch(setTeam(team));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default TeamSubscriber;
