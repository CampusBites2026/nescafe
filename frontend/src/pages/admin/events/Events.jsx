import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

const Events = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Annual Sports Day",
      date: "15 Aug 2026",
      location: "School Ground",
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "20 Aug 2026",
      location: "Main Hall",
    },
  ]);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Events Management
        </h1>

        <Link
          to="/admin/events/create"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Create Event
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow p-6"
          >
            <h2 className="text-xl font-bold mb-4">
              {event.title}
            </h2>

            <div className="flex items-center gap-2 mb-2 text-gray-600">
              <Calendar size={18} />
              {event.date}
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              {event.location}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Events;