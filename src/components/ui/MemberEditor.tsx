import { useState } from "react";
import type { MemberEditorProps, MemberType } from "../../interfaces";
import {
  addMember,
  // deleteMember,
  updateMember,
} from "../../services/teamService";
import InputField from "./InputField";
import ImageInputFeild from "./ImageInputFeild";
import PageTilte from "./PageTilte";
import Button from "./Button";

const MemberEditor = ({
  formTitle,
  formInputs,
  handleCloseForm,
  name,
  position,
  imageUrl,
}: MemberEditorProps) => {
  const [newMember, setNewMember] = useState<MemberType>({
    name: name ? name : "",
    position: position ? position : "",
    imageUrl: imageUrl ? imageUrl : "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setNewMember((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleImageChange = (image: string) => {
    setNewMember((prev) => ({ ...prev, imageUrl: image }));
    console.log("upload images", newMember);
  };

  const handleAddSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(newMember);
      await addMember(newMember);
      console.log("Member added successfully");
      handleCloseForm();
    } catch (error) {
      console.error("Add Member failed:", error);
    }
  };

  const handleEditSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(newMember);
      await updateMember("HqNVddn7qSuP8s7vnvay", newMember);
      console.log("Member updates successfully");
      handleCloseForm();
    } catch (error) {
      console.error("Update Member failed:", error);
    }
  };

  // const testDelete = async () => {
  //   try {
  //     console.log("Deleting Member...");
  //     await deleteMember("wNvdhGOPmqCfDGHg1TNj");
  //     console.log("Member deleted successfully");
  //   } catch (error) {
  //     console.error("Delete Member failed:", error);
  //   }
  // };

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-40"></div>
      <div className="flex items-center justify-center h-full relative z-50 p-4">
        <form
          onSubmit={formTitle === "Add" ? handleAddSubmit : handleEditSubmit}
          className="bg-gray-08 rounded-lg border border-gray-15 p-5 lg:p-10 lg:min-w-175 2xl:p-12.5"
          action="">
          <div className="flex flex-col gap-5 lg:gap-10 2xl:gap-12.5">
            <PageTilte
              title={`${formTitle === "Add" ? `${formTitle} New` : `${formTitle}`} Team
            Member`}
            />
            <div className="border-b border-gray-15"></div>
            <div className="flex justify-center gap-5 lg:gap-10 2xl:gap-12.5">
              <div className="flex flex-col flex-1 gap-5 lg:gap-10 2xl:gap-12.5 justify-between">
                {formInputs?.map((input) => {
                  return (
                    <InputField
                      key={input.name}
                      value={newMember[input.name]}
                      onChange={handleChange}
                      {...input}
                    />
                  );
                })}
              </div>
              <div className="flex flex-1">
                {/* member image */}
                <ImageInputFeild
                  onImageChange={handleImageChange}
                  multi={false}
                  title="Member Image"
                  value={imageUrl && imageUrl}
                />
              </div>
            </div>
            <div className="border-b border-gray-15"></div>
            <div>
              <Button btnType="submit" variant="primary">
                {formTitle === "Add" ? formTitle : "Edit"} Team Mmber
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberEditor;
