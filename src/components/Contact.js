import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

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
    <section id="contact" className="py-20 bg-white text-center px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-primaryPurple mb-4"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-800 mb-6 max-w-2xl mx-auto"
      >
        I'm open to collaboration and opportunities. Let’s build something amazing!
      </motion.p>

      {/* 📧 Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8 space-y-3 text-sm sm:text-base"
      >
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
      </motion.div>

      {/* 📝 Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-lightPurple max-w-xl mx-auto text-left p-6 sm:p-8 rounded-xl shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1 text-primaryPurple">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPurple text-sm sm:text-base"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-1 text-primaryPurple">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryPurple text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-primaryPurple text-white rounded hover:opacity-90 transition w-full sm:w-auto"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
