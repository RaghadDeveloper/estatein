import { useState } from "react";
import type { MemberType } from "../interfaces";
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

  const handleCloseForm = () => {
    setShowAddMemberForm(false);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-main tracking-tight">
          Team Management
        </h1>
        <div className="w-full sm:w-auto">
          <Button variant="primary" onClick={() => setShowAddMemberForm(true)}>
            + Add Member
          </Button>
        </div>
      </div>
      {showAddMemberForm && (
        <MemberEditor
          formTitle="Add"
          formInputs={teamFormInputs}
          handleCloseForm={handleCloseForm}
        />
      )}

      <div className="w-full cursor-cell text-center">
        <table className=" w-full bg-bg-secondary rounded-2xl">
          <thead>
            <tr className="w-full h-20 text-2xl border-b border-gray-15">
              <th>Image</th>
              <th>Name</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-[20px]">
            {team.map((member) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
