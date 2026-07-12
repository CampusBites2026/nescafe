import TeacherLayout from "../../components/layout/TeacherLayout";
import { Download } from "lucide-react";

const TeacherStudyMaterial = () => {
  const materials = [
    {
      title: "Mathematics Notes",
      class: "10-A",
      file: "math-notes.pdf",
    },
    {
      title: "Algebra Worksheet",
      class: "9-B",
      file: "algebra.pdf",
    },
  ];

  return (
    <TeacherLayout>
      <h1 className="text-3xl font-bold mb-6">
        Study Materials
      </h1>

      <div className="grid gap-4">
        {materials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.class}
              </p>
            </div>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
              <Download size={18} />
              Download
            </button>
          </div>
        ))}
      </div>
    </TeacherLayout>
  );
};

export default TeacherStudyMaterial;