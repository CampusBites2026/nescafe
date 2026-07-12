import StudentSidebar from "../sidebar/StudentSidebar";

const StudentLayout = ({ children }) => {
  return (
    <div className="flex">
      <StudentSidebar />

      <div className="ml-72 w-full min-h-screen bg-slate-100">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;