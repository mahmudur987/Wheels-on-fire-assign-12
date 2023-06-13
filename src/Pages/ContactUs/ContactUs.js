import React from "react";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const handlleSend = () => {
    toast.success("your massege has sent to admin pannel");
  };

  return (
    <div className="bg-gray-100 min-h-screen max-w-3xl mx-auto">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <div className="flex">
          <div className="w-1/2 mr-4">
            <label className="block mb-2 font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="w-1/2 ml-4">
            <label className="block mb-2 font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="message"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          onClick={handlleSend}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Send
        </button>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Our Contact Details</h2>
          <p>
            <strong>Address:</strong> 123 Street, City, Country
          </p>
          <p>
            <strong>Phone:</strong> +1 123-456-7890
          </p>
          <p>
            <strong>Email:</strong> contact@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
