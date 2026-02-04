import { CiSquarePlus } from "react-icons/ci";
import MemberEditor from "../components/ui/MemberEditor";
import { useState } from "react";
import { teamFormInputs } from "../data/dashboard";

const Team = () => {
  const [showAddMemberForm, setShowAddMemberForm] = useState<boolean>(false);
  const [showEditMemberForm, setShowEditMemberForm] = useState<boolean>(false);

  const handleCloseForm = () => {
    setShowAddMemberForm(false);
    setShowEditMemberForm(false);
  };

  // testing edit member button
  // const teamMember = {
  //   name: "mimo",
  //   position: "developer",
  //   imageUrl: "/assets/images/clients/client1.webp",
  // };

  return (
    <div>
      {/* title section */}
      <div className="flex items-center justify-between">
        <h2>Members List</h2>
        <div
          className="cursor-pointer hover:text-primary-60 transition-all duration-200"
          onClick={() => setShowAddMemberForm(true)}>
          <CiSquarePlus size={50} />
        </div>
        {showAddMemberForm && (
          <MemberEditor
            formTitle="Add"
            formInputs={teamFormInputs}
            handleCloseForm={handleCloseForm}
          />
        )}
      </div>
      {/* members list section */}
      <div>
        {/* testing edit member button */}
        {/* <article className="border border-violet-700 bg-violet-300 text-center p-10 w-fit">
          <h1>{teamMember.name}</h1>
          <p>{teamMember.position}</p>
          <img className="w-50" src={teamMember.imageUrl} alt="" />
          <button className="border-4 hover:bg-violet-800 cursor-pointer border-violet-400" onClick={() => setShowEditMemberForm(true)}>
            Edit member
          </button>
          {showEditMemberForm && (
            <MemberEditor
              formTitle="Edit"
              formInputs={teamFormInputs}
              handleCloseForm={handleCloseForm}
              name={teamMember.name}
              position={teamMember.position}
              imageUrl={teamMember.imageUrl}
            />
          )}
        </article> */}
      </div>
    </div>
  );
};

export default Team;
