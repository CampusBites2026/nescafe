import StudentLayout from "../../components/layout/StudentLayout";

const StudentProfile = () => {
  const student = {
    name: "Rahul Kumar",
    rollNo: "101",
    class: "10-A",
    section: "A",
    email: "rahul@gmail.com",
    phone: "9876543210",
  };

  return (
    <StudentLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          My Profile
        </h1>

        <div className="space-y-4">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Roll No:</strong> {student.rollNo}</p>
          <p><strong>Class:</strong> {student.class}</p>
          <p><strong>Section:</strong> {student.section}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentProfile;