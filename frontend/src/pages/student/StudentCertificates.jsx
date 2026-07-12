import StudentLayout from "../../components/layout/StudentLayout";
import { Download } from "lucide-react";

const StudentCertificates = () => {
  const certificates = [
    {
      name: "Bonafide Certificate",
      date: "12 June 2026",
    },
    {
      name: "Character Certificate",
      date: "15 June 2026",
    },
  ];

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-6">
        Certificates
      </h1>

      <div className="grid gap-4">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">
                {certificate.name}
              </h3>

              <p className="text-gray-500">
                {certificate.date}
              </p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
              <Download size={18} />
              Download
            </button>
          </div>
        ))}
      </div>
    </StudentLayout>
  );
};

export default StudentCertificates;