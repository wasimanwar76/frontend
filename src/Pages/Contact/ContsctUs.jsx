import React, { useState } from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted successfully!');
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Contact Info Section */}
      <div className="bg-gray-900 text-justify py-12 px-6">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <p className="mt-4 text-lg md:mx-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-900 py-12 mx-4 md:mx-2">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-lg md:text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg md:text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg md:text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-semibold text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-gray-900py-10 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-blue-700 p-3 text-4xl rounded-full">
              <HiLocationMarker />
            </div>
            <div>
              <p>ABC road, New York</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-blue-700 p-3 rounded-full text-4xl">
              <SiGmail />
            </div>
            <div>
              <p>abc@sideuplift.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-blue-700 p-3 text-3xl rounded-full">
              <IoLogoInstagram />
            </div>
            <div>
              <p>Instagram User Name</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-blue-700 p-3 text-3xl rounded-full">
              <MdOutlineAddIcCall />
            </div>
            <div>
              <p>+000 1234 2345</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ContactUs;
