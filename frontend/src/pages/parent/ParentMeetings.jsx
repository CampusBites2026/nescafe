import ParentLayout from "../../components/layout/ParentLayout";

const ParentMeetings = () => {
  const meetings = [
    {
      teacher: "Mr. Sharma",
      date: "15 June 2026",
      time: "10:00 AM",
    },
    {
      teacher: "Mrs. Verma",
      date: "20 June 2026",
      time: "12:00 PM",
    },
  ];

  return (
    <ParentLayout>
      <h1 className="text-3xl font-bold mb-6">
        Parent Teacher Meetings
      </h1>

      <div className="space-y-4">
        {meetings.map((meeting, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h3 className="font-bold">
              {meeting.teacher}
            </h3>

            <p>Date: {meeting.date}</p>

            <p>Time: {meeting.time}</p>
          </div>
        ))}
      </div>
    </ParentLayout>
  );
};

export default ParentMeetings;