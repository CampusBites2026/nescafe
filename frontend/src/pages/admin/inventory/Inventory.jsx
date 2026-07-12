import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";

const Inventory = () => {
  const items = [
    {
      id: 1,
      name: "White Board Marker",
      quantity: 120,
      category: "Stationery",
    },
    {
      id: 2,
      name: "Classroom Chair",
      quantity: 80,
      category: "Furniture",
    },
    {
      id: 3,
      name: "Computer Mouse",
      quantity: 35,
      category: "Electronics",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Inventory Management
        </h1>

        <Link
          to="/admin/inventory/add"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Add Item
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">
                Item Name
              </th>
              <th className="p-4 text-left">
                Category
              </th>
              <th className="p-4 text-left">
                Quantity
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="p-4 flex items-center gap-2">
                  <Package size={18} />
                  {item.name}
                </td>

                <td className="p-4">
                  {item.category}
                </td>

                <td className="p-4">
                  {item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Inventory;