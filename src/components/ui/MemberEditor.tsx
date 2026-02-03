// import { useEffect, useRef, useState } from "react";
// import type { MemberType } from "../../interfaces";
// import {
//   addMember,
//   deleteMember,
//   updateMember,
// } from "../../services/teamService";

// const MemberEditor = () => {
//   const ran = useRef(false);
//   const [newMember, setNewMember] = useState<MemberType>({
//     name: "David Brown s",
//     position: "Head of Property Management",
//     imageUrl:
//       "https://res.cloudinary.com/dqtqpsg2m/image/upload/v1770112858/member3_ytxpev.webp",
//   });

//   useEffect(() => {
//     if (ran.current) return;
//     ran.current = true;

//     const testAdd = async () => {
//       try {
//         await addMember(newMember);
//         console.log("Member added successfully");
//       } catch (error) {
//         console.error("Add Member failed:", error);
//       }
//     };

//     const testEdit = async () => {
//       try {
//         await updateMember("HqNVddn7qSuP8s7vnvay", newMember);
//         console.log("Member updates successfully");
//       } catch (error) {
//         console.error("Update Member failed:", error);
//       }
//     };

//     const testDelete = async () => {
//       try {
//         console.log("Deleting Member...");
//         await deleteMember("wNvdhGOPmqCfDGHg1TNj");
//         console.log("Member deleted successfully");
//       } catch (error) {
//         console.error("Delete Member failed:", error);
//       }
//     };

//     // testAdd();
//     // testEdit();
//     // testDelete();
//   }, [newMember]);

//   return <div>MemberEditor</div>;
// };

// export default MemberEditor;




import { useEffect, useRef, useState } from "react";
import type { MemberType } from "../../interfaces";
import { deleteMember, getTeam } from "../../services/teamService";
import MemberRow from "./MemberRow";
export type MemberWithId = MemberType & { id: string };

const MemberEditor = () => {
  const ran = useRef(false);
  const [members, setMembers] = useState<MemberWithId[]>([]);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const fetchTeam = async () => {
      try {
        const data = await getTeam();
        const membersData: MemberWithId[] = data.map((m) => ({
          id: (m as any).id,
          name: (m as any).name ?? "",
          position: (m as any).position ?? "",
          imageUrl: (m as any).imageUrl ?? "",
        }));

        setMembers(membersData);
      } catch (error) {
        console.error("Fetch team failed:", error);
      }
    };

    fetchTeam();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteMember(id);
      setMembers((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Delete member failed:", error);
    }
  };

  return (
    <div className="w-full cursor-cell text-center">
      <table className=" w-full">
        <thead>
          <tr className="w-full h-20 text-2xl">
            <th >Image</th>
            <th>Name</th>
            <th>Position</th>
            <th>Delete Member</th>
          </tr>
        </thead>
        {/* <MemberHeader/> */}
        <tbody className="text-[20px]">
          {members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberEditor;