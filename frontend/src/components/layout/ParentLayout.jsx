import ParentSidebar from "../sidebar/ParentSidebar";

const ParentLayout = ({ children }) => {
  return (
    <div className="flex">
      <ParentSidebar />

      <div className="ml-72 w-full min-h-screen bg-slate-100">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ParentLayout;