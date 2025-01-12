import React, { useState } from "react";
import { Client, Databases, ID } from "appwrite";

const Feedback = () => {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("678255360016bd4d2b70");

  const databases = new Databases(client);

  const [name, setName] = useState("");
  const [feedbackBody, setFeedbackBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      Name: name,
      Feedback: feedbackBody,
    };

    try {
      const response = await databases.createDocument(
        "6782556d0039171970e4",
        "67825596001086fa7f8c",
        ID.unique(),
        payload
      );
      alert("Feedback submitted successfully:", response);
      setFeedbackBody("");
      setName("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="h-screen w-full place-content-center place-items-center">
      <p className="text-center m-5">
        You've scrolled my 20 days of hardwork in just 20 seconds. <br /> How
        was your experience? <br /> Got any issue? Describe below...
      </p>
      <div className="h-auto w-4/5 md:w-1/2 lg:w-1/3 rounded-lg p-6 bg-white shadow-[0_0px_10px_rgba(0,0,0,0.6)]">
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
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none duration-100 focus:shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)] focus:scale-[99.9%]"
            />
            <textarea
              required
              placeholder="Enter your feedback and issue if you got..."
              maxLength={1000}
              onChange={(e) => setFeedbackBody(e.target.value)}
              value={feedbackBody}
              className="w-full h-24 px-4 border border-gray-300 rounded-lg focus:outline-none duration-100 focus:shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)] focus:scale-[99.9%] resize-none"
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
      <p className="text-center absolute bottom-0 text-xs w-full">
        Credit of this Feedback section goes to Divyesh Gehlot. He managed the
        communication of feedback to the database for me. <br /> Thanks
        Brother...
      </p>
    </div>
  );
};

export default Feedback;
