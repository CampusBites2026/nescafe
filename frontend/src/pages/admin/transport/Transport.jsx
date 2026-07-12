import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";
import { Bus } from "lucide-react";

const Transport = () => {
  const vehicles = [
    {
      id: 1,
      vehicleNo: "UP32 AB 1234",
      driver: "Raj Kumar",
      route: "Route A",
      capacity: 45,
    },
    {
      id: 2,
      vehicleNo: "UP32 CD 5678",
      driver: "Amit Singh",
      route: "Route B",
      capacity: 50,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Transport Management
        </h1>

        <Link
          to="/admin/transport/add"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Add Vehicle
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <Bus size={28} />
              <h2 className="text-xl font-bold">
                {vehicle.vehicleNo}
              </h2>
            </div>

            <p>
              <strong>Driver:</strong>{" "}
              {vehicle.driver}
            </p>

            <p>
              <strong>Route:</strong>{" "}
              {vehicle.route}
            </p>

            <p>
              <strong>Capacity:</strong>{" "}
              {vehicle.capacity}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Transport;