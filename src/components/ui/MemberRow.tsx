import { useState } from "react";
import type { MemberWithId } from "../../pages/Team";
import MemberEditor from "./MemberEditor";
import { teamFormInputs } from "../../data/dashboard";
import { deleteMember } from "../../services/teamService";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DeleteModal from "./DeleteModal";

interface Props {
  member: MemberWithId;
}

const MemberRow = ({ member }: Props) => {
  const [showEditMemberForm, setShowEditMemberForm] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setIsDeleting(true);
      await deleteMember(deleteId);
      setDeleteId(null);
    } catch (error) {
      console.error("Delete member failed:", error);
      alert("Delete member failed");
    }
  };

  const handleCloseForm = () => {
    setShowEditMemberForm(false);
  };

  return (
    <>
      <tr className=" h-30 p-4 border-b border-gray-800">
        <td>
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-30 h-20 m-auto object-cover rounded-2xl border border-gray-15"
          />
        </td>
        <td>{member.name}</td>
        <td>{member.position}</td>
        <td className="flex gap-4 py-8 justify-center">
          <button
            title="Edit"
            className="p-2 cursor-pointer text-gray-400 hover:text-text-main hover:bg-gray-700 rounded-lg transition-all"
            onClick={() => setShowEditMemberForm(true)}
          >
            <FiEdit size={28} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDeleteId(member.id);
            }}
            title="Delete"
            className="p-2 cursor-pointer text-red-400 hover:text-text-main hover:bg-red-500/20 rounded-lg transition-all"
          >
            <FiTrash2 size={28} />
          </button>
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
      <DeleteModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
        title="this Member"
      />
    </>
  );
};

export default MemberRow;
