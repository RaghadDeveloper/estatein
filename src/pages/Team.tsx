import PageTilte from "../components/ui/PageTilte";
import { useState } from "react";
import type { MemberType } from "../interfaces";
import { deleteMember } from "../services/teamService";
import MemberRow from "../components/ui/MemberRow";
import { useSelector } from "react-redux";
import { CiSquarePlus } from "react-icons/ci";
import MemberEditor from "../components/ui/MemberEditor";
import { teamFormInputs } from "../data/dashboard";
export type MemberWithId = MemberType & { id: string };

const Team = () => {
  const team = useSelector(
    (state: { team: { items: MemberWithId[] } }) => state.team.items,
  );
  const [showAddMemberForm, setShowAddMemberForm] = useState<boolean>(false);

  const handleDelete = async (id: string) => {
    try {
      await deleteMember(id);
    } catch (error) {
      console.error("Delete member failed:", error);
    }
  };

  const handleCloseForm = () => {
    setShowAddMemberForm(false);
  };

  return (
    <div className="flex flex-col gap-10">
      <PageTilte title=" Our Team" />
      <div
        className="cursor-pointer hover:text-primary-60 transition-all duration-200"
        onClick={() => setShowAddMemberForm(true)}
      >
        <CiSquarePlus size={50} />
      </div>
      {showAddMemberForm && (
        <MemberEditor
          formTitle="Add"
          formInputs={teamFormInputs}
          handleCloseForm={handleCloseForm}
        />
      )}

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
          <tbody className="text-[20px]">
            {team.map((member) => (
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
