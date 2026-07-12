import DashboardLayout from "../../../components/layout/DashboardLayout";
import { Link } from "react-router-dom";
import { MessageSquare, Mail } from "lucide-react";

const Communications = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Communication Center
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/admin/communications/sms"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <MessageSquare
            size={50}
            className="mb-4 text-blue-600"
          />

          <h2 className="text-2xl font-bold">
            Send SMS
          </h2>

          <p className="text-gray-500 mt-2">
            Send SMS notifications to students,
            teachers and parents.
          </p>
        </Link>

        <Link
          to="/admin/communications/email"
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <Mail
            size={50}
            className="mb-4 text-green-600"
          />

          <h2 className="text-2xl font-bold">
            Send Email
          </h2>

          <p className="text-gray-500 mt-2">
            Send emails to students,
            teachers and parents.
          </p>
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default Communications;