import PageTilte from "../components/ui/PageTilte";
import { useState } from "react";
import type { MemberType } from "../interfaces";
import { deleteMember } from "../services/teamService";
import MemberRow from "../components/ui/MemberRow";
import { useSelector } from "react-redux";
export type MemberWithId = MemberType & { id: string };

const Team = () => {
  const team = useSelector(
    (state: { team: { items: MemberWithId[] } }) => state.team.items,
  );
  const [members, setMembers] = useState<MemberWithId[]>(team);

  const handleDelete = async (id: string) => {
    try {
      await deleteMember(id);
      setMembers((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Delete member failed:", error);
    }
  };
  
  return (
    <div className="flex flex-col gap-10">
      <PageTilte title=" Our Team" />
      <div className="w-full cursor-cell text-center">
        <table className=" w-full">
          <thead>
            <tr className="w-full h-20 text-2xl">
              <th>Image</th>
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
    </div>
  );
};

export default Team;
