const StudentForm = ({
  student = {},
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-xl shadow"
    >
      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2">
            Full Name
          </label>

          <input
            type="text"
            defaultValue={student.name}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2">
            Roll Number
          </label>

          <input
            type="text"
            defaultValue={student.roll}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2">
            Class
          </label>

          <input
            type="text"
            defaultValue={student.class}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2">
            Section
          </label>

          <input
            type="text"
            defaultValue={student.section}
            className="w-full border p-3 rounded-lg"
          />
        </div>

      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg"
      >
        Save Student
      </button>
    </form>
  );
};

export default StudentForm;