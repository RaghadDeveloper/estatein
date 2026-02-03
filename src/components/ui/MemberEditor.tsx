import { useEffect, useRef, useState } from "react";
import type { MemberType } from "../../interfaces";
import {
  addMember,
  deleteMember,
  updateMember,
} from "../../services/teamService";

const MemberEditor = () => {
  const ran = useRef(false);
  const [newMember, setNewMember] = useState<MemberType>({
    name: "David Brown s",
    position: "Head of Property Management",
    imageUrl:
      "https://res.cloudinary.com/dqtqpsg2m/image/upload/v1770112858/member3_ytxpev.webp",
  });

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const testAdd = async () => {
      try {
        await addMember(newMember);
        console.log("Member added successfully");
      } catch (error) {
        console.error("Add Member failed:", error);
      }
    };

    const testEdit = async () => {
      try {
        await updateMember("HqNVddn7qSuP8s7vnvay", newMember);
        console.log("Member updates successfully");
      } catch (error) {
        console.error("Update Member failed:", error);
      }
    };

    const testDelete = async () => {
      try {
        console.log("Deleting Member...");
        await deleteMember("wNvdhGOPmqCfDGHg1TNj");
        console.log("Member deleted successfully");
      } catch (error) {
        console.error("Delete Member failed:", error);
      }
    };

    // testAdd();
    // testEdit();
    // testDelete();
  }, [newMember]);

  return <div>MemberEditor</div>;
};

export default MemberEditor;
