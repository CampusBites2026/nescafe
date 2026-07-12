import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72 min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-6">
          <div className="max-w-full">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;