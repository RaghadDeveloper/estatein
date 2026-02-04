import PageTilte from "../components/ui/PageTilte";
import { useState } from "react";
import type { MemberType } from "../interfaces";
import { deleteMember } from "../services/teamService";
import MemberRow from "../components/ui/MemberRow";
import { useSelector } from "react-redux";
import MemberEditor from "../components/ui/MemberEditor";
import { teamFormInputs } from "../data/dashboard";
import Button from "../components/ui/Button";
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
      <PageTilte title="Our Team" />
      <div className="w-fit self-end">
        <Button variant="primary" onClick={() => setShowAddMemberForm(true)}>
          Add Member
        </Button>
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
