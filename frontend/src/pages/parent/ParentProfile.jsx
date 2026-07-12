import ParentLayout from "../../components/layout/ParentLayout";

const ParentProfile = () => {
  const parent = {
    name: "Anil Kumar",
    email: "anil@gmail.com",
    phone: "9876543210",
    relation: "Father",
  };

  return (
    <ParentLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          Parent Profile
        </h1>

        <div className="space-y-4">
          <p>
            <strong>Name:</strong> {parent.name}
          </p>

          <p>
            <strong>Email:</strong> {parent.email}
          </p>

          <p>
            <strong>Phone:</strong> {parent.phone}
          </p>

          <p>
            <strong>Relation:</strong> {parent.relation}
          </p>
        </div>
      </div>
    </ParentLayout>
  );
};

export default ParentProfile;