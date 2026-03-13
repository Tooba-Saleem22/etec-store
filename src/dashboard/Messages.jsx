import { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await fetch("http://localhost:5000/api/messages");
    const data = await res.json();
    setMessages(data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleRead = async (id, read) => {
    await fetch(`http://localhost:5000/api/messages/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !read }),
    });

    fetchMessages();
  };

  const handleRemove = async (id) => {
    await fetch(`http://localhost:5000/api/messages/${id}`, {
      method: "DELETE",
    });

    fetchMessages();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Messages</h2>

      <ul className="space-y-4">
        {messages.map((m) => (
          <li
            key={m._id}
            className={`border p-4 rounded ${
              m.read ? "bg-gray-100" : "bg-white"
            }`}
          >
            <p>
              <strong>Name:</strong> {m.name}
            </p>
            <p>
              <strong>Email:</strong> {m.email}
            </p>
            <p>
              <strong>Message:</strong> {m.message}
            </p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => toggleRead(m._id, m.read)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                {m.read ? "Unread" : "Read"}
              </button>

              <button
                onClick={() => handleRemove(m._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
