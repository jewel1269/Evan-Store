import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col  md:flex-row gap-8 p-6">
      {/* Contact Info Section */}
      <div className="flex flex-col p-6 border-2 rounded-lg w-full md:w-1/3">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-red-600 text-3xl">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg">Call To Us</h3>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8806111122222</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-red-600 text-3xl">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg">Write To Us</h3>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
