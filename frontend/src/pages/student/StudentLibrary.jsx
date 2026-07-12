import StudentLayout from "../../components/layout/StudentLayout";

const StudentLibrary = () => {
  const books = [
    {
      title: "Mathematics Part 1",
      author: "NCERT",
      status: "Issued",
    },
    {
      title: "Science Practical",
      author: "NCERT",
      status: "Available",
    },
    {
      title: "English Grammar",
      author: "Wren & Martin",
      status: "Issued",
    },
  ];

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">
        Library Books
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">Book</th>
              <th className="p-4">Author</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{book.title}</td>
                <td className="p-4">{book.author}</td>
                <td className="p-4">{book.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StudentLayout>
  );
};

export default StudentLibrary;