import ParentLayout from "../../components/layout/ParentLayout";

const MyChildren = () => {
  const children = [
    {
      name: "Rahul Kumar",
      class: "10-A",
      rollNo: "101",
    },
    {
      name: "Priya Kumar",
      class: "8-B",
      rollNo: "205",
    },
  ];

  return (
    <ParentLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Children
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Class</th>
              <th className="p-4">Roll No</th>
            </tr>
          </thead>

          <tbody>
            {children.map((child, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{child.name}</td>
                <td className="p-4">{child.class}</td>
                <td className="p-4">{child.rollNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ParentLayout>
  );
};

export default MyChildren;