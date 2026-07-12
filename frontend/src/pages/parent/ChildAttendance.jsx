import ParentLayout from "../../components/layout/ParentLayout";

const ChildAttendance = () => {
  return (
    <ParentLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">
          Child Attendance
        </h1>

        <h2 className="text-5xl font-bold text-green-600">
          94%
        </h2>
      </div>
    </ParentLayout>
  );
};

export default ChildAttendance;