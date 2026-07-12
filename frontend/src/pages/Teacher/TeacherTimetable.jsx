import TeacherLayout from "../../components/layout/TeacherLayout";

const TeacherTimetable = () => {
  const timetable = [
    {
      day: "Monday",
      class: "10-A",
      subject: "Mathematics",
      time: "09:00 AM",
    },
    {
      day: "Monday",
      class: "9-B",
      subject: "Mathematics",
      time: "11:00 AM",
    },
    {
      day: "Tuesday",
      class: "10-A",
      subject: "Mathematics",
      time: "10:00 AM",
    },
  ];

  return (
    <TeacherLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Timetable
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4">Day</th>
              <th className="p-4">Class</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Time</th>
            </tr>
          </thead>

          <tbody>
            {timetable.map((item, index) => (
              <tr
                key={index}
                className="border-t"
              >
                <td className="p-4">
                  {item.day}
                </td>

                <td className="p-4">
                  {item.class}
                </td>

                <td className="p-4">
                  {item.subject}
                </td>

                <td className="p-4">
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TeacherLayout>
  );
};

export default TeacherTimetable;