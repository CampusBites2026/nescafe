const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    class: "10",
    section: "A",
    roll: "101",
  },
  {
    id: 2,
    name: "Priya Singh",
    class: "9",
    section: "B",
    roll: "102",
  },
  {
    id: 3,
    name: "Amit Kumar",
    class: "8",
    section: "A",
    roll: "103",
  },
];

const StudentsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Roll No</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Class</th>
            <th className="p-4 text-left">Section</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-t"
            >
              <td className="p-4">{student.roll}</td>
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.class}</td>
              <td className="p-4">{student.section}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default StudentsTable;