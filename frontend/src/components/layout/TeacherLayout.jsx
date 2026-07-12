import TeacherSidebar from "../sidebar/TeacherSidebar";

const TeacherLayout = ({ children }) => {
  return (
    <div className="flex">
      <TeacherSidebar />

      <div className="ml-72 w-full min-h-screen bg-slate-100">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TeacherLayout;