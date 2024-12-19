import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="mx-auto text-center font-sans m-10">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 relative inline-block">
        CONTACT US
        <span className="block w-40 h-0.5 bg-black mt-4 mx-auto"></span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-3/5 mx-auto "
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 px-4 text-lg border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-400 transition"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 px-4 text-lg border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-400 transition"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 px-4 text-lg border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-400 transition"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 px-4 text-lg border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-400 transition resize-none bg-gray-50 h-36"
          required
        ></textarea>
        <button
          type="submit"
          className="mx-auto sm:w-3/5 lg:w-2/5 mt-4 py-4 bg-gradient-to-r from-gray-300 to-gray-400 border border-gray-600 text-neutral-800 text-lg font-medium p-2 rounded-md cursor-pointer hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
