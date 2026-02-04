import { useState } from "react";
import type { MemberWithId } from "../../pages/Team";
import Button from "./Button";
import MemberEditor from "./MemberEditor";
import { teamFormInputs } from "../../data/dashboard";

interface Props {
  member: MemberWithId;
  onDelete: (id: string) => void;
}

const MemberRow = ({ member, onDelete }: Props) => {
  const [showEditMemberForm, setShowEditMemberForm] = useState<boolean>(false);

  const handleCloseForm = () => {
    setShowEditMemberForm(false);
  };

  return (
    <>
      <tr className=" h-30 ">
        <td>
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-50 h-25 m-auto"
          />
        </td>
        <td>{member.name}</td>
        <td>{member.position}</td>
        <td className="flex gap-4">
          <Button
            variant="secondary"
            onClick={() => setShowEditMemberForm(true)}
          >
            Edit
          </Button>
          <Button variant="primary" onClick={() => onDelete(member.id)}>
            Delete
          </Button>
        </td>
      </tr>
      {showEditMemberForm && (
        <MemberEditor
          formTitle="Edit"
          formInputs={teamFormInputs}
          handleCloseForm={handleCloseForm}
          {...member}
        />
      )}
    </>
  );
};

export default MemberRow;
