import ParentLayout from "../../components/layout/ParentLayout";

const ChildFees = () => {
  return (
    <ParentLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">
          Fee Details
        </h1>

        <h2 className="text-4xl font-bold text-red-600">
          ₹5,000 Pending
        </h2>
      </div>
    </ParentLayout>
  );
};

export default ChildFees;