import type { MemberWithId } from "../../pages/Team";
import Button from "./Button";

interface Props {
  member: MemberWithId;
  onDelete: (id: string) => void;
}

const MemberRow = ({ member, onDelete }: Props) => {
  return (
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
      <td>
        <Button variant="primary" onClick={() => onDelete(member.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default MemberRow;
