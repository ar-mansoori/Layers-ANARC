import React, { useState } from "react";
import { Client, Databases, ID } from "appwrite";

const Feedback = () => {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("678100da001287a61409");

  const databases = new Databases(client);

  const [name, setName] = useState("");
  const [feedbackBody, setFeedbackBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: name,
      feedback: feedbackBody,
    };

    try {
      const response = await databases.createDocument(
        "678104ae00372abd0ccd",
        "678104b8003de439884a",
        ID.unique(),
        payload
      );
      console.log("Feedback submitted successfully:", response);
      setFeedbackBody("");
      setName("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-auto w-4/5 md:w-1/2 lg:w-1/3 border-2 border-black rounded-lg shadow-md p-6 bg-white">
        <p className="text-lg font-semibold mb-4 text-center">Feedback</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              required
              placeholder="Enter your name"
              maxLength={100}
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              required
              placeholder="Enter your feedback"
              maxLength={1000}
              onChange={(e) => setFeedbackBody(e.target.value)}
              value={feedbackBody}
              className="w-full h-24 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <button
              type="submit"
              className="w-full h-12 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
