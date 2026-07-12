import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const EditTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    qualification: "",
    salary: "",
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchTeacher();
  }, []);

  const fetchTeacher = async () => {
    try {
      const res = await API.get(`/teachers/${id}`);
      setTeacher(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load teacher");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const updateTeacher = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      await API.put(`/teachers/${id}`, teacher);

      alert("Teacher Updated Successfully");

      navigate("/admin/teachers");
    } catch (error) {
      console.log(error);
      alert("Failed to update teacher");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg">
          Loading Teacher...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Edit Teacher
        </h2>

        <form
          onSubmit={updateTeacher}
          className="grid md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Teacher Name"
            value={teacher.name || ""}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={teacher.email || ""}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={teacher.phone || ""}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={teacher.department || ""}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={teacher.qualification || ""}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={teacher.salary || ""}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button
            type="submit"
            disabled={updating}
            className="col-span-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
          >
            {updating
              ? "Updating..."
              : "Update Teacher"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditTeacher;