import ParentLayout from "../../components/layout/ParentLayout";

const Children = () => {
  const children = [
    {
      id: 1,
      name: "Rahul Kumar",
      className: "10-A",
      rollNo: "101",
    },
    {
      id: 2,
      name: "Priya Kumar",
      className: "7-B",
      rollNo: "52",
    },
  ];

  return (
    <ParentLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Children
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Roll No
              </th>
            </tr>
          </thead>

          <tbody>
            {children.map((child) => (
              <tr
                key={child.id}
                className="border-t"
              >
                <td className="p-4">
                  {child.name}
                </td>

                <td className="p-4">
                  {child.className}
                </td>

                <td className="p-4">
                  {child.rollNo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ParentLayout>
  );
};

export default Children;