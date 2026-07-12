import TeacherLayout from "../../components/layout/TeacherLayout";

const TeacherProfile = () => {
  const teacher = {
    name: "Rajesh Sharma",
    email: "rajesh@gmail.com",
    phone: "9876543210",
    subject: "Mathematics",
    qualification: "M.Sc Mathematics",
  };

  return (
    <TeacherLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-white p-8 rounded-xl shadow">
        <div className="space-y-4">
          <p>
            <strong>Name:</strong> {teacher.name}
          </p>

          <p>
            <strong>Email:</strong> {teacher.email}
          </p>

          <p>
            <strong>Phone:</strong> {teacher.phone}
          </p>

          <p>
            <strong>Subject:</strong> {teacher.subject}
          </p>

          <p>
            <strong>Qualification:</strong>{" "}
            {teacher.qualification}
          </p>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default TeacherProfile;