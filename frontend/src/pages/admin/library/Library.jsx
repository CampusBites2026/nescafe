import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBooks = async () => {
    try {
      const res = await API.get("/library");
      setBooks(res.data.data || res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      book.author
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      book.category
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Library Management
        </h1>

        <div className="flex gap-3">
          <Link
            to="/admin/library/add"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Add Book
          </Link>

          <Link
            to="/admin/library/issue"
            className="bg-green-600 text-white px-5 py-3 rounded-lg"
          >
            Issue Book
          </Link>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-5">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="outline-none ml-2 w-full"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Book Name
              </th>

              <th className="p-4 text-left">
                Author
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Quantity
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr
                  key={book._id}
                  className="border-t"
                >
                  <td className="p-4">
                    {book.title}
                  </td>

                  <td className="p-4">
                    {book.author}
                  </td>

                  <td className="p-4">
                    {book.category}
                  </td>

                  <td className="p-4">
                    {book.quantity}
                  </td>

                  <td className="p-4">
                    <span
                      className={
                        book.quantity > 0
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {book.quantity > 0
                        ? "Available"
                        : "Out of Stock"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-6 text-center text-gray-500"
                >
                  No Books Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Library;