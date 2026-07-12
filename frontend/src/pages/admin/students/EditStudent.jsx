import {
  useEffect,
  useState,
} from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import API from "../../../api/axios";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] =
    useState({
      name: "",
      email: "",
      rollNo: "",
      className: "",
      phone: "",
      address: "",
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const res =
        await API.get(
          `/students/${id}`
        );

      setStudent(res.data);
    } catch (error) {
      console.log(error);

      alert(
        "Failed to load student"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]:
        e.target.value,
    });
  };

  const updateStudent = async (
    e
  ) => {
    e.preventDefault();

    try {
      await API.put(
        `/students/${id}`,
        student
      );

      alert(
        "Student Updated Successfully"
      );

      navigate(
        "/admin/students"
      );
    } catch (error) {
      console.log(error);

      alert("Update Failed");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">
          Edit Student
        </h2>

        <form
          onSubmit={
            updateStudent
          }
          className="grid grid-cols-2 gap-5"
        >
          <input
            name="name"
            value={
              student.name || ""
            }
            onChange={
              handleChange
            }
            placeholder="Student Name"
            className="border p-3 rounded"
            required
          />

          <input
            type="email"
            name="email"
            value={
              student.email || ""
            }
            onChange={
              handleChange
            }
            placeholder="Email"
            className="border p-3 rounded"
          />

          <input
            name="rollNo"
            value={
              student.rollNo || ""
            }
            onChange={
              handleChange
            }
            placeholder="Roll Number"
            className="border p-3 rounded"
            required
          />

          <input
            name="className"
            value={
              student.className ||
              ""
            }
            onChange={
              handleChange
            }
            placeholder="Class"
            className="border p-3 rounded"
            required
          />

          <input
            name="phone"
            value={
              student.phone || ""
            }
            onChange={
              handleChange
            }
            placeholder="Phone"
            className="border p-3 rounded"
          />

          <input
            name="address"
            value={
              student.address ||
              ""
            }
            onChange={
              handleChange
            }
            placeholder="Address"
            className="border p-3 rounded"
          />

          <button
            type="submit"
            className="col-span-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
          >
            Update Student
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditStudent;