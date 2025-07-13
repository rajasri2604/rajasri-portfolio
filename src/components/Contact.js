import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message submitted!\nName: ${form.name}\nMessage: ${form.message}`);
    setForm({ name: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white text-center px-4">
      <h2 className="text-4xl font-bold text-primaryPurple mb-4">Get in Touch</h2>
      <p className="text-gray-800 mb-2">
        I'm open to collaboration and opportunities. Let’s build something amazing!
      </p>

      {/* 📨 Email and 📞 Phone with Icons */}
      <div className="mb-6 space-y-2">
        <div className="flex justify-center items-center gap-2 text-primaryPurple font-semibold">
          <MdEmail className="text-xl" />
          <a href="mailto:rajasrirk2604@gmail.com" className="hover:underline">
            rajasrirk2604@gmail.com
          </a>
        </div>

        <div className="flex justify-center items-center gap-2 text-primaryPurple font-semibold">
          <BsTelephoneFill className="text-lg" />
          <span>+91 99447 51535</span>
        </div>
      </div>

      {/* 📬 Form */}
      <form onSubmit={handleSubmit} className="bg-lightPurple max-w-xl mx-auto text-left p-6 rounded-xl shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1 text-primaryPurple">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPurple"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-1 text-primaryPurple">Your Message</label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPurple"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-primaryPurple text-white rounded hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
