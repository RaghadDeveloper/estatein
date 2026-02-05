import { useState } from "react";
import type { MemberEditorProps, MemberType } from "../../interfaces";
import { addMember, updateMember } from "../../services/teamService";
import InputField from "./InputField";
import ImageInputFeild from "./ImageInputFeild";
import PageTilte from "./PageTilte";
import Button from "./Button";
import { FirebaseError } from "firebase/app";

const MemberEditor = ({
  formTitle,
  formInputs,
  handleCloseForm,
  id,
  name,
  position,
  imageUrl,
}: MemberEditorProps) => {
  const initialMember: MemberType = {
    name: name || "",
    position: position || "",
    imageUrl: imageUrl || "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [newMember, setNewMember] = useState<MemberType>(initialMember);
  const noValue =
    newMember.name === "" ||
    newMember.position === "" ||
    newMember.imageUrl === "";

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
      setIsLoading(true);
      console.log(newMember);
      await addMember(newMember);
      handleCloseForm();
      console.log("Member added successfully");
      setIsLoading(false);
      alert("Member added successfully");
    } catch (error) {
      setIsLoading(false);
      console.error("Add Member failed:", error);
      if (error instanceof FirebaseError) {
        setErrorMessage(error.code + error.message);
      } else {
        setErrorMessage("Unexpected error" + error);
      }
    }
  };

  const handleEditSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (!id) return;

      const changedFeild: Partial<MemberType> = {};

      (Object.keys(newMember) as Array<keyof MemberType>).forEach((key) => {
        if (newMember[key] !== initialMember[key]) {
          changedFeild[key] = newMember[key];
        }
      });

      if (Object.keys(changedFeild).length > 0) {
        console.log("changed fields to update: ", changedFeild);
        await updateMember(id, changedFeild);
        console.log("Member updates successfully");
        alert("Member updates successfully");
      } else {
        console.log("No changes detected");
        alert("No changes detected");
      }

      handleCloseForm();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Update Member failed:", error);
      alert("Update Member failed");
      if (error instanceof FirebaseError) {
        setErrorMessage(error.code + error.message);
      } else {
        setErrorMessage("Unexpected error" + error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleCloseForm}
      ></div>

      <span>&nbsp;</span>
      <div className="flex items-center justify-center h-full relative z-50 p-4">
        <form
          onSubmit={formTitle === "Add" ? handleAddSubmit : handleEditSubmit}
          className="bg-bg-main rounded-lg border border-gray-15 p-5 lg:p-10 lg:min-w-175 2xl:p-12.5"
          action=""
        >
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
                      value={newMember[input.name as keyof MemberType]}
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
              <Button
                btnType="submit"
                variant="primary"
                disabled={noValue || isLoading}
              >
                {formTitle === "Add" ? formTitle : "Edit"} Team Mmber
              </Button>
            </div>
          </div>
        </form>
        {errorMessage && <p className="text-red-500 mt-5">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default MemberEditor;
