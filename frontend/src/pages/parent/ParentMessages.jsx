import ParentLayout from "../../components/layout/ParentLayout";

const ParentMessages = () => {
  const messages = [
    {
      sender: "Class Teacher",
      message: "Please ensure assignment submission.",
    },
    {
      sender: "School Admin",
      message: "Fee payment due next week.",
    },
  ];

  return (
    <ParentLayout>
      <h1 className="text-3xl font-bold mb-6">
        Messages
      </h1>

      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h3 className="font-bold">
              {message.sender}
            </h3>

            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </ParentLayout>
  );
};

export default ParentMessages;