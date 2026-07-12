import ParentLayout from "../../components/layout/ParentLayout";

const ChildResults = () => {
  return (
    <ParentLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">
          Academic Results
        </h1>

        <h2 className="text-4xl font-bold text-blue-600">
          Grade A
        </h2>
      </div>
    </ParentLayout>
  );
};

export default ChildResults;
