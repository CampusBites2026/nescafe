import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const fetchNotifications =
    async () => {
      try {
        const res = await API.get(
          "/notifications"
        );

        setNotifications(
          res.data?.data ||
            res.data ||
            []
        );
      } catch (error) {
        console.log(error);
        alert(
          "Failed to load notifications"
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const filteredNotifications =
    notifications.filter(
      (item) =>
        item.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.message
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Notifications...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">
          Notification Center
        </h1>

        <Link
          to="/admin/notifications/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
        >
          Send Notification
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Notifications..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="border p-3 rounded-lg w-full md:w-80"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        {filteredNotifications.length ===
        0 ? (
          <div className="p-8 text-center text-gray-500">
            No Notifications Found
          </div>
        ) : (
          filteredNotifications.map(
            (item) => (
              <div
                key={item._id}
                className="border-b p-5 hover:bg-slate-50"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div>
                    <h3 className="font-bold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {item.message}
                    </p>
                  </div>

                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {item.audience}
                  </span>
                </div>

                {item.createdAt && (
                  <p className="text-sm text-gray-400 mt-3">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </p>
                )}
              </div>
            )
          )
        )}
      </div>
    </DashboardLayout>
  );
};

export default Notifications;