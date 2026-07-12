import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";
import { BedDouble } from "lucide-react";

const Hostel = () => {
  const rooms = [
    {
      id: 1,
      roomNo: "A-101",
      capacity: 4,
      occupied: 3,
    },
    {
      id: 2,
      roomNo: "A-102",
      capacity: 4,
      occupied: 2,
    },
    {
      id: 3,
      roomNo: "B-201",
      capacity: 6,
      occupied: 5,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Hostel Management
        </h1>

        <Link
          to="/admin/hostel/add-room"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Add Room
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <BedDouble size={28} />
              <h2 className="text-xl font-bold">
                {room.roomNo}
              </h2>
            </div>

            <p>
              <strong>Capacity:</strong> {room.capacity}
            </p>

            <p>
              <strong>Occupied:</strong> {room.occupied}
            </p>

            <p>
              <strong>Available:</strong>{" "}
              {room.capacity - room.occupied}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Hostel;