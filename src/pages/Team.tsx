import MemberEditor from "../components/ui/MemberEditor";
import PageTilte from "../components/ui/PageTilte";

const Team = () => {
  return (
    <div className="flex flex-col gap-10">
      <PageTilte title=" Our Team"/>
      <MemberEditor />
    </div>
  );
};

export default Team;
