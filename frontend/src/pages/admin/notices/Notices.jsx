import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";
import { Link } from "react-router-dom";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchNotices = async () => {
    try {
      const res = await API.get("/notices");
      setNotices(res.data.data || res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch notices");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const filteredNotices = notices.filter(
    (notice) =>
      notice.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      notice.message
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Notices...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">
          Notice Board
        </h1>

        <Link
          to="/admin/notices/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
        >
          Create Notice
        </Link>
      </div>

      <div className="mb-5">
        <input
          type="text"
          placeholder="Search Notice..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-3 rounded-lg w-full md:w-80"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        {filteredNotices.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No Notices Found
          </div>
        ) : (
          filteredNotices.map((notice) => (
            <div
              key={notice._id}
              className="border-b p-5 hover:bg-slate-50"
            >
              <h3 className="font-bold text-lg">
                {notice.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {notice.message}
              </p>

              {notice.createdAt && (
                <p className="text-sm text-gray-400 mt-3">
                  {new Date(
                    notice.createdAt
                  ).toLocaleDateString()}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
};

export default Notices;